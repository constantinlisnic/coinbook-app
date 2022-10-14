import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PortfolioCoinProps } from "PortfolioCoinProps";
import axios from "axios";
import { getURL } from "utils";

interface portfolioState {
  savedCoins: Array<PortfolioCoinProps>;
  isLoading: boolean;
  errorMessage: null | string;
  isError: boolean;
}

const initialState: portfolioState = {
  savedCoins: [],
  isLoading: false,
  errorMessage: null,
  isError: false,
};

function getMarketURL(coinId: string, currencyName: string) {
  const marketPath = "coins/markets";
  const marketConfig = {
    vs_currency: currencyName,
    ids: coinId,
  };
  return getURL(marketPath, marketConfig);
}

function getHistoryURL(coinId: string, date: string) {
  const historyPath = `coins/${coinId}/history`;
  const historyConfig = { date };
  return getURL(historyPath, historyConfig);
}

type AsyncThunkConfig = {
  state: {
    settings: {
      activeCurrency: { name: string };
    };
    portfolio: {
      savedCoins: Array<PortfolioCoinProps>;
    };
  };
};

export const getPortfolioData = createAsyncThunk<
  portfolioState["savedCoins"],
  void,
  AsyncThunkConfig
>("store/getPortfolioData", async (_args, thunkAPI) => {
  const state = thunkAPI.getState();
  const { name: currencyName } = state.settings.activeCurrency;
  const { savedCoins } = state.portfolio;
  try {
    const assetData = await Promise.all(
      savedCoins.map(async (coin: PortfolioCoinProps) => {
        const { data: marketData }: { data: object } = await axios(
          getMarketURL(coin.name, currencyName)
        );
        const { data: historyData }: { data: object } = await axios(
          getHistoryURL(coin.name, coin.purchaseDate)
        );
        return { ...coin, marketData, historyData };
      })
    );
    return assetData as portfolioState["savedCoins"];
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addCoin(state, action: PayloadAction<any>) {
      state.savedCoins = [...state.savedCoins, action.payload];
    },
    deleteCoin(state, action) {
      state.savedCoins = state.savedCoins.filter(
        (coin) => coin.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPortfolioData.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getPortfolioData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.savedCoins = action.payload;
    });
    builder.addCase(
      getPortfolioData.rejected,
      (state, action: PayloadAction<any>) => {
        state.errorMessage = action.payload;
        state.isError = true;
      }
    );
  },
});

export const { addCoin, deleteCoin } = portfolioSlice.actions;

export default portfolioSlice.reducer;

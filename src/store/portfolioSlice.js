import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getURL } from "utils";

const initialState = {
  savedCoins: [],
  isLoading: false,
  errorMessage: null,
};

function getMarketURL(coinId, currencyName) {
  const marketPath = "coins/markets";
  const marketConfig = {
    vs_currency: currencyName,
    ids: coinId,
  };
  return getURL(marketPath, marketConfig);
}

function getHistoryURL(coinId, date) {
  const historyPath = `coins/${coinId}/history`;
  const historyConfig = { date };
  return getURL(historyPath, historyConfig);
}

export const getPortfolioData = createAsyncThunk(
  "store/getPortfolioData",
  async (args, thunkAPI) => {
    const state = thunkAPI.getState();
    const { name: currencyName } = state.settings.activeCurrency;
    const { savedCoins } = state.portfolio;
    try {
      const assetData = await Promise.all(
        savedCoins.map(async (coin) => {
          const { data: marketData } = await axios(
            getMarketURL(coin.id, currencyName)
          );
          const { data: historyData } = await axios(
            getHistoryURL(coin.id, coin.purchaseDate)
          );
          return { ...coin, marketData, historyData };
        })
      );
      return assetData;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addCoin(state, action) {
      state.savedCoins = [...state.savedCoins, action.payload];
    },
  },
  extraReducers: {
    [getPortfolioData.pending]: (state) => {
      state.isLoading = true;
      console.log("Loading...");
    },
    [getPortfolioData.fulfilled]: (state, action) => {
      console.log("Fulfilled !", action.payload);
      state.isLoading = false;
      state.savedCoins = action.payload;
    },
    [getPortfolioData.rejected]: (state, action) => {
      console.log("rejected/error");
      state.errorMessage = action.payload;
    },
  },
});

export const { addCoin } = portfolioSlice.actions;

export default portfolioSlice.reducer;

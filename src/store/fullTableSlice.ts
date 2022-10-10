import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getURL } from "utils";
import { CoinProps } from "CoinProps";

interface fullTableState {
  tableData: Array<CoinProps>;
  isLoading: boolean;
  errorMessage: null | string;
  loadingMoreCoins: boolean;
  page: number;
}

const initialState: fullTableState = {
  tableData: [],
  isLoading: false,
  errorMessage: null,
  loadingMoreCoins: false,
  page: 1,
};

export const getTableData = createAsyncThunk<
  fullTableState,
  string,
  { state: { fullTable: { page: number } } }
>("store/getTableData", async (currencyName, thunkAPI) => {
  const page = thunkAPI.getState().fullTable.page;
  const path = "coins/markets";
  const config = {
    vs_currency: currencyName,
    order: "market_cap_desc",
    per_page: 20,
    page,
    sparkline: true,
    price_change_percentage: "1h,24h,7d",
  };
  const url = getURL(path, config);

  try {
    const { data } = await axios(url);
    return data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

const fullTableSlice = createSlice({
  name: "fullTable",
  initialState,
  reducers: {
    loadMoreCoins(state) {
      state.loadingMoreCoins = true;
      state.page++;
    },
    loadFirstPage(state) {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTableData.pending, (state) => {
      if (!state.loadingMoreCoins) state.isLoading = true;
    });
    builder.addCase(
      getTableData.fulfilled,
      (state, action: PayloadAction<any>) => {
        if (!state.loadingMoreCoins && state.page === 1) {
          state.tableData = action.payload;
          state.isLoading = false;
        } else {
          state.tableData = [...state.tableData, ...action.payload];
          state.loadingMoreCoins = false;
        }
      }
    );
    builder.addCase(
      getTableData.rejected,
      (state, action: PayloadAction<any>) => {
        state.errorMessage = action.payload;
      }
    );
  },
});

export const { loadMoreCoins, loadFirstPage } = fullTableSlice.actions;

export default fullTableSlice.reducer;

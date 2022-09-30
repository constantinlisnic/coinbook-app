import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getURL } from "utils";

const initialState = {
  tableData: [],
  isLoading: false,
  errorMessage: null,
  loadingMoreCoins: false,
  page: 1,
};

export const getTableData = createAsyncThunk(
  "store/getTableData",
  async (currencyName, thunkAPI) => {
    try {
      const { page } = thunkAPI.getState().fullTable;
      const path = "coins/markets";
      const config = {
        vs_currency: currencyName,
        order: "market_cap_desc",
        per_page: 20,
        page: page,
        sparkline: true,
        price_change_percentage: "1h,24h,7d",
      };
      const url = getURL(path, config);
      const { data } = await axios(url);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

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
  extraReducers: {
    [getTableData.pending]: (state) => {
      if (!state.loadingMoreCoins) state.isLoading = true;
    },
    [getTableData.fulfilled]: (state, action) => {
      if (!state.loadingMoreCoins && state.page === 1) {
        state.tableData = action.payload;
        state.isLoading = false;
      } else {
        state.tableData = [...state.tableData, ...action.payload];
        state.loadingMoreCoins = false;
      }
    },
    [getTableData.rejected]: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { loadMoreCoins, loadFirstPage } = fullTableSlice.actions;

export default fullTableSlice.reducer;

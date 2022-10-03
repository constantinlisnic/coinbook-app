import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedCoins: [],
};

const portfolioSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    addCoin(state, action) {
      state.savedCoins = [...state.savedCoins, action.payload];
    },
  },
});

export const { addCoin } = portfolioSlice.actions;

export default portfolioSlice.reducer;

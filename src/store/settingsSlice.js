import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeIsLight: false,
  activeCurrency: {
    name: "usd",
    symbol: "$",
    IconURL: "https://i.ibb.co/YkKkc6J/dollar-icon.png",
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.themeIsLight = !state.themeIsLight;
    },
    changeCurrency(state, action) {
      state.activeCurrency = action.payload;
    },
  },
});

export const { toggleTheme, changeCurrency } = settingsSlice.actions;

export default settingsSlice.reducer;

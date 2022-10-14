import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface settingsState {
  themeIsLight: boolean;
  activeCurrency: {
    name: string;
    symbol: string;
    iconURL: string;
  };
}

const initialState: settingsState = {
  themeIsLight: false,
  activeCurrency: {
    name: "usd",
    symbol: "$",
    iconURL: "https://i.ibb.co/YkKkc6J/dollar-icon.png",
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.themeIsLight = !state.themeIsLight;
    },
    changeCurrency(
      state,
      action: PayloadAction<{ name: string; symbol: string; iconURL: string }>
    ) {
      state.activeCurrency = action.payload;
    },
  },
});

export const { toggleTheme, changeCurrency } = settingsSlice.actions;

export default settingsSlice.reducer;

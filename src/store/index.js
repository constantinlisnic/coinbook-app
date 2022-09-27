import { configureStore } from "@reduxjs/toolkit";
import settings from "./settingsSlice";

const store = configureStore({
  reducer: {
    settings,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import settings from "./settingsSlice";
import fullTable from "./fullTableSlice";

const store = configureStore({
  reducer: {
    settings,
    fullTable,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

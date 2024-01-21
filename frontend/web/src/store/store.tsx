import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiReducers } from "../api/apiReducers";
import { basicInfoApi } from "../api/basicInfoApi";

export const rootReducer = combineReducers({
  ...apiReducers,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(basicInfoApi.middleware),
});

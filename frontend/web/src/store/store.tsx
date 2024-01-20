import { combineReducers } from "@reduxjs/toolkit";
import { apiReducers } from "../api/apiReducers";

export const rootReducer = combineReducers({
  ...apiReducers,
});

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiReducers } from "../api/apiReducers";
import { basicInfoApi } from "../api/basicInfoApi";
import { projectsApi } from "../api/projectsApi";
import { skillsApi } from "../api/skillsApi";
import { workExperienceApi } from "../api/workExperienceApi";
import { educationApi } from "../api/educationApi";
import { otherInterestsApi } from "../api/otherInterestsApi";

export const rootReducer = combineReducers({
  ...apiReducers,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(basicInfoApi.middleware)
      .concat(projectsApi.middleware)
      .concat(skillsApi.middleware)
      .concat(workExperienceApi.middleware)
      .concat(educationApi.middleware)
      .concat(otherInterestsApi.middleware),
});

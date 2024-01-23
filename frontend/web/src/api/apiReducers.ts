import { basicInfoApi } from "./basicInfoApi";
import { projectsApi } from "./projectsApi";

export const apiReducers = {
  [basicInfoApi.reducerPath]: basicInfoApi.reducer,
  [projectsApi.reducerPath]: projectsApi.reducer,
};

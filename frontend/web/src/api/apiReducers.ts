import { basicInfoApi } from "./basicInfoApi";
import { projectsApi } from "./projectsApi";
import { skillsApi } from "./skillsApi";

export const apiReducers = {
  [basicInfoApi.reducerPath]: basicInfoApi.reducer,
  [projectsApi.reducerPath]: projectsApi.reducer,
  [skillsApi.reducerPath]: skillsApi.reducer,
};

import { basicInfoApi } from "./basicInfoApi";
import { projectsApi } from "./projectsApi";
import { skillsApi } from "./skillsApi";
import { workExperienceApi } from "./workExperienceApi";

export const apiReducers = {
  [basicInfoApi.reducerPath]: basicInfoApi.reducer,
  [projectsApi.reducerPath]: projectsApi.reducer,
  [skillsApi.reducerPath]: skillsApi.reducer,
  [workExperienceApi.reducerPath]: workExperienceApi.reducer,
};

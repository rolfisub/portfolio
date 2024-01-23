import { createApi } from "@reduxjs/toolkit/query/react";
import { getApiBaseQuery } from "./apiHelpers";

export interface ProjectResponse {
  id: number;
  user_id: number;
  title: string;
  description: string | null;
  url: string | null;
  explanation: string | null;
  example_link: string | null;
}

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: getApiBaseQuery(),
  endpoints: (builder) => {
    return {
      getProjectsByUserId: builder.query<ProjectResponse[], number>({
        query: (userId) => `projects?user_id=${userId}`,
      }),
    };
  },
});

export const { useGetProjectsByUserIdQuery } = projectsApi;

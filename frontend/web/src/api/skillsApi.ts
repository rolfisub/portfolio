import { createApi } from "@reduxjs/toolkit/query/react";
import { getApiBaseQuery } from "./apiHelpers";

export interface SkillsResponse {
  id: number;
  user_id: number;
  skill: string;
  explanation: string | null;
  example_link: string | null;
}

export const skillsApi = createApi({
  reducerPath: "skillsApi",
  baseQuery: getApiBaseQuery(),
  endpoints: (builder) => {
    return {
      getSkillsByUserId: builder.query<SkillsResponse[], number>({
        query: (userId) => `skills?user_id=${userId}`,
      }),
    };
  },
});

export const { useGetSkillsByUserIdQuery } = skillsApi;

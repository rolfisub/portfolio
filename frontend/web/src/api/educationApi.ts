import { createApi } from "@reduxjs/toolkit/query/react";
import { getApiBaseQuery } from "./apiHelpers";

export interface EducationResponse {
  id: number;
  user_id: number;
  degree: string;
  school: string;
  location: string;
  graduation_date: string;
  example_link: string;
}

export const educationApi = createApi({
  reducerPath: "educationApi",
  baseQuery: getApiBaseQuery(),
  endpoints: (builder) => {
    return {
      getEducationByUserId: builder.query<EducationResponse[], number>({
        query: (userId) => `education?user_id=${userId}`,
      }),
    };
  },
});

export const { useGetEducationByUserIdQuery } = educationApi;

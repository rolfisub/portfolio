import { createApi } from "@reduxjs/toolkit/query/react";
import { getApiBaseQuery } from "./apiHelpers";

export interface WorkExperienceResponse {
  id: 1;
  user_id: 1;
  position: string;
  company: string;
  location: string | null;
  start_date: string | null;
  end_date: string | null;
  description: string | null;
  example_link: string | null;
}

export const workExperienceApi = createApi({
  reducerPath: "workExperienceApi",
  baseQuery: getApiBaseQuery(),
  endpoints: (builder) => {
    return {
      getWorkExperienceByUserId: builder.query<
        WorkExperienceResponse[],
        number
      >({
        query: (userId) => `work-experience?user_id=${userId}`,
      }),
    };
  },
});

export const { useGetWorkExperienceByUserIdQuery } = workExperienceApi;

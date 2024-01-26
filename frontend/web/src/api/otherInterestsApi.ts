import { createApi } from "@reduxjs/toolkit/query/react";
import { getApiBaseQuery } from "./apiHelpers";

export interface OtherInterestsResponse {
  id: number;
  user_id: number;
  name: string;
  description: string;
  example_link: string;
}

export const otherInterestsApi = createApi({
  reducerPath: "otherInterestsApi",
  baseQuery: getApiBaseQuery(),
  endpoints: (builder) => {
    return {
      getOtherInterestsByUserId: builder.query<
        OtherInterestsResponse[],
        number
      >({
        query: (userId) => `other-interests?user_id=${userId}`,
      }),
    };
  },
});

export const { useGetOtherInterestsByUserIdQuery } = otherInterestsApi;

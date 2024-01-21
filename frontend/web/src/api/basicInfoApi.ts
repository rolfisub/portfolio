import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface BasicInfoResponse {
  id: number;
  user_id: number;
  name: string;
  title: string | null;
  location: string | null;
  email: string | null;
  phone: string | null;
  website: string | null;
  summary: string | null;
  linkedin: string | null;
  github: string | null;
  twitter: string | null;
  picture: string | null;
}

export const basicInfoApi = createApi({
  reducerPath: "basicInfoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => {
    return {
      getBasicInfoByUser: builder.query<BasicInfoResponse, number>({
        query: (userId) => `basic-info/${userId}`,
      }),
    };
  },
});

export const { useGetBasicInfoByUserQuery } = basicInfoApi;

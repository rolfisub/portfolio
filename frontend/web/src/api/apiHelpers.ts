import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export function getApiBaseQuery(): BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> {
  return fetchBaseQuery({ baseUrl: "http://localhost:3001/" });
}

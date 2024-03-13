import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/v1",
    // eslint-disable-next-line no-unused-vars
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json");
      const token = localStorage.getItem("auth");
      const accessToken = JSON.parse(token)?.accessToken;
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});

import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: "/users/getUsers",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllUserQuery } = userApi;

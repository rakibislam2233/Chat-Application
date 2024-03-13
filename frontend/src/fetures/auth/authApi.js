import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result?.data?.accessToken,
              user: result?.data?.data,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    signIn: builder.mutation({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result?.data?.accessToken,
              user: result?.data?.data,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
export const { useRegisterMutation, useSignInMutation } = authApi;

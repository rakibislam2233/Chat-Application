import { apiSlice } from "../api/apiSlice";

export const conversationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversation: builder.query({
      query: () => ({
        url: "/conversation",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetConversationQuery } = conversationApi;

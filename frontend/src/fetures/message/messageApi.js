import { apiSlice } from "../api/apiSlice";

export const messageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessage: builder.query({
      query: (partnerId) => ({
        url: `messages/${partnerId}`,
        method: "GET",
      }),
    }),
    sendMessage: builder.mutation({
      query: ({ senderId, partnerId, data }) => ({
        url: `messages/sendMessage/${partnerId}`,
        method: "POST",
        body: data,
      }),
      // eslint-disable-next-line no-unused-vars
      async onQueryStarted(
        { senderId, partnerId, data },
        { dispatch, queryFulfilled }
      ) {
        //
        dispatch(
          apiSlice.util.updateQueryData(
            "getConversation",
            undefined,
            (draft) => {
              
            }
          )
        );

        try {
          const { data } = await queryFulfilled;
          //passimistik update
          dispatch(
            apiSlice.util.updateQueryData(
              "getMessage",
              partnerId.toString(),
              (draft) => {
                draft?.data?.push(data?.data);
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});
export const { useSendMessageMutation, useGetMessageQuery } = messageApi;

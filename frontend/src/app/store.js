import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../fetures/api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { chatPartnerSlice } from "../fetures/chatPartner/chatPartnerSlice";
import { activeFriendsSlice } from "../fetures/activeFriendsSlice/activeFriendsSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    chatPartner: chatPartnerSlice.reducer,
    activeFriends: activeFriendsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
setupListeners(store.dispatch);

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partner: {},
  isActive: "",
};
export const chatPartnerSlice = createSlice({
  name: "chatPartner",
  initialState,
  reducers: {
    startChat: (state, action) => {
      state.partner = action.payload?.participants;
      state.isActive = action.payload.isActive;
    },
  },
});
export const { startChat } = chatPartnerSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: [],
  reducers: {
    addInitialDetails: (state, action) => {
      return action.payload;
    },
  },
});
export const formActions = formSlice.actions;
export default formSlice;

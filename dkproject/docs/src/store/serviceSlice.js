import { createSlice } from "@reduxjs/toolkit";
const serviceSlice = createSlice({
  name: "services",
  initialState: [],
  reducers: {
    addInitialServices: (state, action) => {
      return action.payload;
    },
  },
});

export const servicesActions = serviceSlice.actions;
export default serviceSlice;

import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "./serviceSlice";
import cartSlice from "./cartSlice";
import formSlice from "./formSlice";
import fetchStatusSlice from "./fetchStatusSlice";

const dataStore = configureStore({
  reducer: {
    services: serviceSlice.reducer,
    cart: cartSlice.reducer,
    form: formSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});

export default dataStore;

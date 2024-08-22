import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "./serviceSlice";
import cartSlice from "./cartSlice";

const dataStore = configureStore({
  reducer: {
    services: serviceSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default dataStore;

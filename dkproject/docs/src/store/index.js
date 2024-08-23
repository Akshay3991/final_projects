import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "./serviceSlice";
import cartSlice from "./cartSlice";
import formSlice from "./formSlice";

const dataStore = configureStore({
  reducer: {
    services: serviceSlice.reducer,
    cart: cartSlice.reducer,
    form: formSlice.reducer,
  },
});

export default dataStore;

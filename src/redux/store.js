import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./reduser/authSlice";

const rootReducer = {
  cart: cartReducer,
  auth: authReducer, 
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

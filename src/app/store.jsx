import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/shopping-cart/cartSlice";
import cartUiSlice from "../features/shopping-cart/cartUiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartUi: cartUiSlice
  }
});

export default store;
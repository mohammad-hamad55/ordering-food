import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartShopingSlice from "./cart-shoping-slice";
import shopingListSlice from "./shoping-list-slice";
import formslice from "./form-slice";

const myStore = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cartShoping: cartShopingSlice.reducer,
    shopingList: shopingListSlice.reducer,
    form: formslice.reducer,
  },
});

export default myStore;

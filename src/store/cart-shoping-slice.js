import { createSlice } from "@reduxjs/toolkit";

const cartShopingSlice = createSlice({
  name: "ui-slice",
  initialState: {
    amount: "0",
  },
  reducers: {
    updateAmount(state, action) {
      state.amount = +state.amount + +action.payload;
    },
    decrementAmount(state, action) {
      if (action.payload === "+") {
        state.amount = +state.amount + 1;
      } else {
        state.amount = +state.amount - 1;
      }
    },clearAmount(state){
      state.amount='0';
    }
  },
});

export const cartShopingActions = cartShopingSlice.actions;

export default cartShopingSlice;

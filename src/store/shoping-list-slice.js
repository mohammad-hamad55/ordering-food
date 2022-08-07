import { createSlice } from "@reduxjs/toolkit";

const shopingListSlice = createSlice({
  name: "shoping-list-slice",
  initialState: { myShopingList: [] },
  reducers: {
    shopingListHandler(state, action) {
      let ok = false;

      state.myShopingList.forEach((el) => {
        if (el.id === action.payload.id) {
          el.miniCounter = +el.miniCounter + +action.payload.miniCounter;
          ok = true;
        }
      });
      if (!ok) {
        state.myShopingList = [...state.myShopingList, action.payload];
      }
    },
    updateTheOverLay(state, action) {
      state.myShopingList.forEach((el) => {
        if (el.id === action.payload.id) {
          if (action.payload.sign === "+") {
            el.miniCounter = +el.miniCounter + 1;
          }
          if (action.payload.sign === "-") {
            if (el.miniCounter === 1) {
            } else {
              el.miniCounter = +el.miniCounter - 1;
            }
          }
        }
      });
    },
    removeElFromOverLay(state, action) {
      const result = state.myShopingList.filter(
        (el) => !el.id === action.payload
      );
      state.myShopingList = [...result];
    },clearShopingList(state){
      state.myShopingList=[];
    }
  },
});

export const shopingListActions = shopingListSlice.actions;

export default shopingListSlice;

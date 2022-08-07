import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui-slice",
  initialState: {
    apperBack: false,
    animationVald: false,
   
  },reducers:{
    backdropApper(state,action){
        state.apperBack=action.payload;
    },
    trigerAnimation(state,action){
        state.animationVald=action.payload;
    }
  }
});

export const uiSliceActions=uiSlice.actions;

export default uiSlice;

import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form-slice",
  initialState: {
    name: "",
    nameToutch: false,
    street: "",
    streetToutch: false,
    postal: "",
    postalToutch: false,
    city: "",
    cityToutch: false,
    isLoading: false,
    hasError: false,
  },
  reducers: {
    clearInputs(state) {
      state.city = "";
      state.name = "";
      state.postal = "";
      state.street = "";
    },
    changeInputtoutchs(state, action) {
      if (action.payload) {
        state.nameToutch = true;
        state.cityToutch = true;
        state.postalToutch = true;
        state.streetToutch = true;
      } else {
        state.nameToutch = false;
        state.cityToutch = false;
        state.postalToutch = false;
        state.streetToutch = false;
      }
    },
    changeLoading(state, action) {
      state.isLoading = action.payload;
    },
    changeError(state, action) {
      state.hasError = action.payload;
    },
    changeInput(state, action) {
      state[action.payload.input] = action.payload.value;
    },
    changeInputtoutch(state, action) {
      state[action.payload.input] = action.payload.value;
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice;

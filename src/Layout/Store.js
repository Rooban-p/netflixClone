import { configureStore, createSlice } from "@reduxjs/toolkit";

const StoreSlice = createSlice({
  initialState: {
    isPopUp: "",
  },
  name: "dummy",
  reducers: {
    isPopUpHander(state, action) {
      state.isPopUp = action.payload;
    },
    isPopUpHander1(state, action) {
      state.isPopUp = action.payload;
    },
  },
});

export const storeAction = StoreSlice.actions;
const Store = configureStore(StoreSlice);
export default Store;
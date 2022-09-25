import { RootState } from "../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  name: string;
  email: string;
  wishList: string[];
}

const initialState: FormState = {
  name: "",
  email: "",
  wishList: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    addWishlistItem: (state, action: PayloadAction<string>) => {
      state.wishList.push(action.payload);
    },
    removeWishlistItem: (state, action: PayloadAction<number>) => {
      state.wishList = state.wishList.filter((item, index) => index !== action.payload);
    },
  },
});

export const { setName, setEmail, addWishlistItem, removeWishlistItem } =
  formSlice.actions;

export const selectName = (state: RootState) => state.form.name;
export const selectEmail = (state: RootState) => state.form.email;
export const selectWishlist = (state: RootState) => state.form.wishList;

export default formSlice.reducer;

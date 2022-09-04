import { RootState } from "../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  value: string;
}

const initialState: FormState = {
  value: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = formSlice.actions;

export const selectValue = (state: RootState) => state.form.value;

export default formSlice.reducer;
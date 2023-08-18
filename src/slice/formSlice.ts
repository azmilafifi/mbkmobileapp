import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  part1: any; // Customize this type
  part2: any; // Customize this type
  part3: any; // Customize this type
  part4: any; // Customize this type
}

const initialState: FormState = {
  part1: {},
  part2: {},
  part3: {},
  part4: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormPart(state, action: PayloadAction<{ partNumber: number; data: any }>) {
      const { partNumber, data } = action.payload;
      state[`part${partNumber}` as keyof FormState] = data;
    },
  },
});



export const { updateFormPart } = formSlice.actions;

export default formSlice.reducer;

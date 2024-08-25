import { createSlice } from "@reduxjs/toolkit";

type FormStepState = {
    stepNumber: number;
}

const initialState: FormStepState = {
    stepNumber: 1,
}

const screenSlice = createSlice({
    name: "changeNumber",
    initialState,
    reducers: {
        setStepNumber: ((state, { payload }) => {
            state.stepNumber = payload;
        }),
    }
});

export default screenSlice.reducer
export const { setStepNumber } = screenSlice.actions
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
        goBack: (state) => {
            state.stepNumber = state.stepNumber-1;
        },
        goBackAfterSubmission: (state) => {
            state.stepNumber = initialState.stepNumber;
        },
    },
});

export default screenSlice.reducer
export const { setStepNumber, goBack, goBackAfterSubmission } = screenSlice.actions
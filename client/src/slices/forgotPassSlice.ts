import { createSlice } from "@reduxjs/toolkit";

type ForgotPasswordState = {
    isOpen: boolean,
    formStepNumber: number,
}

const initialState: ForgotPasswordState = {
    isOpen: false,
    formStepNumber: 0,
}

const forgotPasswordSlice = createSlice({
    name: "forgotPass",
    initialState,
    reducers: {
        openForgotPassModal: (state) => {
             state.isOpen = true;
             state.formStepNumber = 1;
        },
        closeForgotPassModal: (state) => {
            state.formStepNumber = 0;
            state.isOpen = false;
        },
        setFormStepNumber: (state, { payload}) => {
            state.formStepNumber = payload;
        },
    },
});

export default forgotPasswordSlice.reducer;
export const { openForgotPassModal, closeForgotPassModal, setFormStepNumber } = forgotPasswordSlice.actions
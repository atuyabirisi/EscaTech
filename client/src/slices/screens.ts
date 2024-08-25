import { createSlice } from "@reduxjs/toolkit";

type ScreenState = {
    currentScreen: number;
}

const initialState: ScreenState = {
        currentScreen: 1,
}

const screenSlice = createSlice({
    name: "toggleScreen",
    initialState,
    reducers: {
        showGenerateInvoice: ((state, { payload }) => {
            state.currentScreen = payload;
        }),
        showManageInvoice: ((state, { payload }) => {
            state.currentScreen = payload;
        }),
       
    }
});

export default screenSlice.reducer
export const { showGenerateInvoice, showManageInvoice } = screenSlice.actions
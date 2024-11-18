import { configureStore } from "@reduxjs/toolkit";
import forgotPasswordDataReducer from "./slices/forgotPassSlice"
import resetPasswordformReducer from "./slices/resetPassFormSlice"

export const store = configureStore({
    reducer: {
        forgotPassword: forgotPasswordDataReducer,
        resetPassMultiForm: resetPasswordformReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
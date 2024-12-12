import { createSlice } from "@reduxjs/toolkit";
import { TypeResetPassword } from "../types/resetPassword";

type ResetPasswordData = {
  formData: TypeResetPassword
};

const initialState: ResetPasswordData = {
   formData:  {
     email: "",
     otp: "",
     password: "",
   },
};

const resetPassWordSlice = createSlice({
   name: "resetPasswordSlice",
   initialState,
   reducers: {
      setFormData: (state, action) => {
         state.formData = { ...state.formData, ...action.payload }
      },
   },
});

export default resetPassWordSlice.reducer
export const { setFormData } = resetPassWordSlice.actions















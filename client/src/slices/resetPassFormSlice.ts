import { createSlice } from "@reduxjs/toolkit";

type FormData = {
  email: string,
  otp: string,
  password: string,
}

type ResetPasswordData = {
  formData: FormData
}

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
	   state.formData = {...state.formData, ...action.payload}
	}
   },
});


export default resetPassWordSlice.reducer
export const { setFormData } = resetPassWordSlice.actions















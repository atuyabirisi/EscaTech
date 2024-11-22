import { createSlice } from "@reduxjs/toolkit";

type CustomerRegistrationState = {
    modalState: boolean  
}

const initialState: CustomerRegistrationState = {
    modalState: false,
}

const customerRegSlice = createSlice({
    name: 'clientreg',
    initialState,
    reducers: {
        toggleCustomerRegModal(state) {
            state.modalState = !state.modalState;
        },
    }
});

export const { toggleCustomerRegModal } = customerRegSlice.actions;
export default customerRegSlice.reducer;
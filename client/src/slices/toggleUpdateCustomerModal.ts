import { createSlice } from "@reduxjs/toolkit";

interface ToggleUpdateCustomerModal {
    updateCustomerModalState: boolean;
}

const initialState: ToggleUpdateCustomerModal = {
    updateCustomerModalState: false,
}

const toggleUpdateCustomerModal = createSlice({
    name: "toggleUpdateCustomer",
    initialState,
    reducers: {
        toggleUpdateCustomer: (state) => {
            state.updateCustomerModalState = !state.updateCustomerModalState;
        },
    }
});

export default toggleUpdateCustomerModal.reducer;
export const { toggleUpdateCustomer } = toggleUpdateCustomerModal.actions
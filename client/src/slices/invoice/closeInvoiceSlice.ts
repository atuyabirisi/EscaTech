import { createSlice } from "@reduxjs/toolkit";

type CloseInvoiceState = {
    closeInvoiceModalState: boolean  
}

const initialState: CloseInvoiceState = {
    closeInvoiceModalState: false,
}

const closeInvoiceModalSlice = createSlice({
    name: 'closeInvoice',
    initialState,
    reducers: {
        toggleCloseInvoiceModal(state) {
            state.closeInvoiceModalState = !state.closeInvoiceModalState;
        },
    }
});

export const { toggleCloseInvoiceModal } = closeInvoiceModalSlice.actions;
export default closeInvoiceModalSlice.reducer;
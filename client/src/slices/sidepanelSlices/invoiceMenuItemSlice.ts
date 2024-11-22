import { createSlice } from "@reduxjs/toolkit";

type SidepanelInvoiceItem = {
    toggleInvoiceMenuItem: boolean
}

const initialState: SidepanelInvoiceItem = {
    toggleInvoiceMenuItem: false
}

const sidepanelInvoiceItem = createSlice({
    name: "sidePanelInvoiceItem",
    initialState,
    reducers: {
        toggleSidePanelInvoiceItem: ((state, { payload }) =>{
            if(payload === 1) {
                state.toggleInvoiceMenuItem = !state.toggleInvoiceMenuItem;
            }
        }),
    },
});

export default sidepanelInvoiceItem.reducer
export const { toggleSidePanelInvoiceItem } = sidepanelInvoiceItem.actions

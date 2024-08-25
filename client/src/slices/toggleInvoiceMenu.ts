import { createSlice } from "@reduxjs/toolkit";

type InvoiceSubMenuState = {
    invoiceSubMenu: boolean;
}

const initialState: InvoiceSubMenuState = {
    invoiceSubMenu: false,
}

const InvoiceSubMenu = createSlice({
    name: "toggleInvoiceSubMenu",
    initialState,
    reducers: {
        showInvoiceSubMenu: (state) => {
            state.invoiceSubMenu = true;
        },
        hideInvoiceSubMenu: (state) => {
            state.invoiceSubMenu = false;
        },
    }
});

export default InvoiceSubMenu.reducer
export const { showInvoiceSubMenu, hideInvoiceSubMenu } = InvoiceSubMenu.actions
import { createSlice } from "@reduxjs/toolkit";
import { InvoiceItemsType } from "../../schemas/invoiceFormSchemas/invoiceItemsSchema";

export type InvoiceItems = {
    invoiceItemData: InvoiceItemsType
}

const initialState: InvoiceItems = {
    invoiceItemData: {
        description: '',
        quantity: 0,
        unitPrice: 0,
        subtotal: 0,
    }
}

const invoiceItemsCart = createSlice({
    name: "items",
    initialState,
    reducers: {
        setInvoiceItemsData: (state, { payload }) => {
            state.invoiceItemData = { ...state.invoiceItemData, ...payload };
            state.invoiceItemData.subtotal = (state.invoiceItemData.quantity * state.invoiceItemData.unitPrice);
        },   
        resetInvoiceItemsForm: (state) => {
            state.invoiceItemData = initialState.invoiceItemData;
        },
    }
});

export default invoiceItemsCart.reducer;
export const { setInvoiceItemsData,  resetInvoiceItemsForm } = invoiceItemsCart.actions;
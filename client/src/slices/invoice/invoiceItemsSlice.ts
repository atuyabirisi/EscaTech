import { createSlice } from "@reduxjs/toolkit";

export type Item = {
    description: string;
    quantity: number;
    unitPrice: number;
    amount: number;
};

export type InvoiceItems = {
    invoiceItemData: Item
}

const initialState: InvoiceItems = {
    invoiceItemData: {
        description: '',
        quantity: 0,
        unitPrice: 0,
        amount: 0,
    }
}

const invoiceItemsCart = createSlice({
    name: "items",
    initialState,
    reducers: {
        setInvoiceItemsData: (state, { payload }) => {
            state.invoiceItemData = { ...state.invoiceItemData, ...payload };
            state.invoiceItemData.amount = (state.invoiceItemData.quantity * state.invoiceItemData.unitPrice);
        },   
        resetInvoiceItemsForm: (state) => {
            state.invoiceItemData = initialState.invoiceItemData;
        },
    }
});

export default invoiceItemsCart.reducer;
export const { setInvoiceItemsData,  resetInvoiceItemsForm } = invoiceItemsCart.actions;
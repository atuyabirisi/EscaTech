import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/typeDefinitions";

export type InvoiceProducts = {
    productData: Product
}

const initialState: InvoiceProducts = {
    productData: {
        description: '',
        quantity: 0,
        unitprice: 0,
        amount: 0,
    }
}

const invoiceProductsCart = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProductsData: (state, { payload }) => {
            state.productData = { ...state.productData, ...payload };
            state.productData.amount = (state.productData.quantity * state.productData.unitprice);
          },
        resetProductsForm: (state) => {
            state.productData = initialState.productData;
          },
    }
});

export default invoiceProductsCart.reducer;
export const { setProductsData, resetProductsForm } = invoiceProductsCart.actions;
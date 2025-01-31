import { createSlice } from "@reduxjs/toolkit";
import { InvoicePaymentFormType } from "../../types/invoicePaymentType";



const initialState: InvoicePaymentFormType = {
   invoicePaymentFormData: {
    invoice_id: "",
    amount_due: 0,
    payed_amount: 0,
    payment_date: "",
    payment_method: "",
    bank_name: "",
    transaction_reference: "",
    outstanding_balance: 0,
    credit_balance: 0,
   }
   }


const invoicePaymentSlice = createSlice({
    name: "invoicePaymentSlice",
    initialState,
    reducers: {
        updateInvoicePaymentData: (state, action) => {
            state.invoicePaymentFormData = {...state.invoicePaymentFormData, ...action.payload}
        },          
        resetPaymentForm(state){
            state = initialState
        }
    }
})

export default invoicePaymentSlice.reducer;
export const { updateInvoicePaymentData, resetPaymentForm } = invoicePaymentSlice.actions
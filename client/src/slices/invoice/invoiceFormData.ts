import { createSlice } from '@reduxjs/toolkit';
import { InvoiceFormData } from '../../types/invoiceFormData';

type InvoceFormData = {
    formData: InvoiceFormData, 
}

const initialState: InvoceFormData = {
  formData: {
    status: '',
    opendate: '',
    duedate: '',
    service: '',
    client: '',
    invoiceItems: [],
    vat: 3240,
    total: 0,
    grandTotal: 0
  },
};

const invoiceFormDataSlice = createSlice({
  name: 'invoiceFormData',
  initialState,
  reducers: {
    setInvoiceFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setInvoiceProdutsData: (state, { payload }) => {
      state.formData.invoiceItems.push(payload)
    },
    calculateTotalBeforeTaxes: (state) => {
      const { invoiceItems } = state.formData;
      let totalBeforeTaxes = 0;
      for (let index = 0; index < invoiceItems.length; index++) {
        totalBeforeTaxes += invoiceItems[index].subtotal;
      }  
      state.formData.total = totalBeforeTaxes
    },
    calculateGrandTotal: (state) => {
      const { total, vat } = state.formData;
      state.formData.grandTotal = total + vat;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
    },
  },
});

export const { setInvoiceFormData, setInvoiceProdutsData,calculateTotalBeforeTaxes, calculateGrandTotal, resetForm } = invoiceFormDataSlice.actions;
export default invoiceFormDataSlice.reducer;

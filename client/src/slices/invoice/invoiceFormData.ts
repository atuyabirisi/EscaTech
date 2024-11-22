import { createSlice } from '@reduxjs/toolkit';

type InvoiceItem = {
  description: string,
  quantity: number,
  unitprice: number,
  amount: number,
} 

type FormData = {
    status: string,
    opendate: string,
    duedate: string ,
    client: string,
    invoiceItems: InvoiceItem[],
    vat: number,
    total: number
    grandTotal: number
}

type InvoceFormData = {
    formData: FormData
}

const initialState: InvoceFormData = {
  formData: {
    status: '',
    opendate: '',
    duedate: '',
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
      let total = 0;
      for (let index = 0; index < invoiceItems.length; index++) {
        total += invoiceItems[index].amount;
      }  
      state.formData.total = total
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

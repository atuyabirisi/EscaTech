import { createSlice } from '@reduxjs/toolkit';

type ProductDetails = {
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
    products: ProductDetails[],
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
    products: [],
    vat: 2240,
    total: 0,
    grandTotal: 0
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setFormProdutsData: (state, {payload}) => {
      state.formData.products.push(payload)
    },
    calculateTotalBeforeTaxes: (state) => {
      const { products } = state.formData;
      let total = 0;
      for (let index = 0; index < products.length; index++) {
        total += products[index].amount;
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

export const { setFormData, setFormProdutsData, calculateTotalBeforeTaxes,  resetForm, calculateGrandTotal } = formSlice.actions;

export default formSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import screenSlice from './slices/screens'
import sidePanelSlice from './slices/toggleSidePanel'
import clientRegSlice from './slices/clientreg'
import invoiceFormStepsReducer from './slices/invoicesteps';
import formReducer from './slices/invoiceform';
import productCartReducer from './slices/products';
import activeUserReducer from './slices/activeUser';
import invoiceSubMenuReducer from './slices/toggleInvoiceMenu';

export const store = configureStore({
    reducer: {
      screen: screenSlice,
      toggleSidePanel: sidePanelSlice,
      toggleClientReg: clientRegSlice,
      invoiceSteps: invoiceFormStepsReducer,
      invoiceForm: formReducer,
      productsCart: productCartReducer,
      activeUser: activeUserReducer,
      invoiceSubMenu: invoiceSubMenuReducer,
    }
 })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
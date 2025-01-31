import { configureStore } from "@reduxjs/toolkit";
import forgotPasswordDataReducer from "./slices/forgotPassSlice";
import resetPasswordformReducer from "./slices/resetPassFormSlice";
import toggleSubMenuReducer from "./slices/invoice/toggleSubMenus";
import invoiceFormStepsReducer from "./slices/invoice/invoiceFormSteps";
import invoiceFormDataReducer from "./slices/invoice/invoiceFormData";
import customerRegModal from "./slices/toggleCustomerReg";
import invoiceItemsReducer from "./slices/invoice/invoiceItemsSlice";
import paginationReducer from "./slices/pagination";
import updateCustomerModalReducer from "./slices/toggleUpdateCustomerModal"
import invoicePaymentFormReducer from "./slices/invoice/closeInvoiceSlice";
import invoicePaymentDataReducer from "./slices/invoice/invoicePaymentData";



export const store = configureStore({
    reducer: {
        forgotPassword: forgotPasswordDataReducer,
        resetPassMultiForm: resetPasswordformReducer,
        toggleSidepanelSubmenus: toggleSubMenuReducer,
        invoiceFormSteps: invoiceFormStepsReducer,
        invoiceFormData: invoiceFormDataReducer,
        toggleCustomerRegModal: customerRegModal,
        invoiceItemsData: invoiceItemsReducer,
        paginationState: paginationReducer,
        updateCustomerModalState: updateCustomerModalReducer,
        toggleInvoicePaymentModal: invoicePaymentFormReducer,
        invoicePaymentData: invoicePaymentDataReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
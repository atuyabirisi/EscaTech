import { configureStore } from "@reduxjs/toolkit";
import forgotPasswordDataReducer from "./slices/forgotPassSlice";
import resetPasswordformReducer from "./slices/resetPassFormSlice";
import toggleSubMenuReducer from "./slices/sidepanelSlices/invoiceMenuItemSlice";
import invoiceFormStepsReducer from "./slices/invoiceFormSteps";
import heroScreenReducer from "./slices/heroSectionScreen";
import invoiceFormDataReducer from "./slices/invoice/invoiceFormData";
import customerRegModal from "./slices/customerRegSlice";
import invoiceItemsReducer from "./slices/invoice/invoiceItemsSlice";

export const store = configureStore({
    reducer: {
        forgotPassword: forgotPasswordDataReducer,
        resetPassMultiForm: resetPasswordformReducer,
        toggleSidepanelSubmenu: toggleSubMenuReducer,
        invoiceFormSteps: invoiceFormStepsReducer,
        heroScreenState: heroScreenReducer, 
        invoiceFormData: invoiceFormDataReducer,
        toggleCustomerRegModal: customerRegModal,
        invoiceItemsData: invoiceItemsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
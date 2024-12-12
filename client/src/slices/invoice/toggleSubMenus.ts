import { createSlice } from "@reduxjs/toolkit";

type SidepanelSubMenus = {
    invoiceSubMenuState: boolean,
    customerSubMenuState: boolean,
}

const initialState: SidepanelSubMenus = {
    invoiceSubMenuState: false,
    customerSubMenuState: false
}

const sidePanelSubMenus = createSlice({
    name: "sidepanelsubmenus",
    initialState,
    reducers: {
        toggleInvoiceSubMenu: ((state) => {
            state.invoiceSubMenuState = !state.invoiceSubMenuState;
        }),
        toggleCutomerSubMenu: ((state) => {
            state.customerSubMenuState = !state.customerSubMenuState;
        }),
    },
});

export default sidePanelSubMenus.reducer
export const { toggleInvoiceSubMenu, toggleCutomerSubMenu } = sidePanelSubMenus.actions

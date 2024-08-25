import { createSlice } from "@reduxjs/toolkit";

type ClientRegState = {
    isOpen: boolean  
}

const initialState: ClientRegState = {
    isOpen: false,
}

const ClientRegSlice = createSlice({
    name: 'clientreg',
    initialState,
    reducers: {
        openClientRegModal(state) {
            state.isOpen = true;
        },
        closeClientRegmodal: (state => {
            state.isOpen = false;
        })
    }
});

export const { openClientRegModal, closeClientRegmodal } = ClientRegSlice.actions;
export default ClientRegSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

type SidePanelState = {
    toggleSidePanel: boolean;
}

const initialState: SidePanelState = {
    toggleSidePanel: true,
}

const sidePanelSlice = createSlice({
    name: "toggleSidePanel",
    initialState,
    reducers: {
        toggleSidePanel: (state) => {
            state.toggleSidePanel = !state.toggleSidePanel;
        },
     
    }
});

export default sidePanelSlice.reducer
export const { toggleSidePanel } = sidePanelSlice.actions
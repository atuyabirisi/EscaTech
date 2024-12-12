import { createSlice } from "@reduxjs/toolkit";

type HeroSectionScreenState = {
    currentScreen: number;
}

const initialState: HeroSectionScreenState = {
    currentScreen: 1,
}

const heroScreenSlice = createSlice({
    name: "changeScreen",
    initialState,
    reducers: {
        setHeroScreenState: ((state, { payload }) => {
            state.currentScreen = payload;
        }),
    },
});

export default heroScreenSlice.reducer
export const { setHeroScreenState } = heroScreenSlice.actions
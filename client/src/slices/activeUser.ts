import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../utilities/apiClient";
import { ActiveUser } from "../types/typeDefinitions";

//Async thunk to fetch active user data

export const fetchSignedInUser = createAsyncThunk('fetchUser', async() => {
    const { data, status} = await apiClient.get('/auth');

    if(status !== 200) throw new Error('Failed to fetch user');
    return data;
})

type FetchResult = {
    activeUser: null | ActiveUser ;
    status: string;
    error: null | string;
}

const initialState: FetchResult = {
    activeUser: null,
    status: 'idle',
    error: null
}

const signedinUserSlice = createSlice({
    name: 'signedInUser',
    initialState,
    reducers: {
        logout(state){
            state.activeUser = initialState.activeUser;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchSignedInUser.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchSignedInUser.fulfilled, (state, { payload }) => {
            state.status = "succeeded";
            state.activeUser = payload;
        })
        .addCase(fetchSignedInUser.rejected, (state) => {
            state.status = "failed";
        })
    }
})
export const { logout } = signedinUserSlice.actions;
export default signedinUserSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";
import {getItemsAsync, getItemByIdAsync, addItemAsync, deleteItemAsync, patchItemAsync} from "./thunks";

const initialState = {
    items: [],
    detailedItem: null,
    editItem: false
};

const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {
        setEditItem: (state,action) => {
            state.editItem = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getItemsAsync.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(getItemByIdAsync.fulfilled, (state, action) => {
                state.detailedItem = action.payload;
            })
            .addCase(addItemAsync.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(patchItemAsync.fulfilled, (state, action) => {
                state.items.map((item) => item.id === action.payload.id ? action.payload : item);
            })
            .addCase(deleteItemAsync.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item.id !== action.payload);
            })
    }
})

export default inventorySlice.reducer;
export const {setEditItem} = inventorySlice.actions;
import {createAsyncThunk} from "@reduxjs/toolkit";
import InventoryService from './service';

export const getItemsAsync = createAsyncThunk(
    'GET_ITEMS',
    async () => {
        return await InventoryService.getItems();
    }
);

export const getItemByIdAsync = createAsyncThunk(
    'GET_ITEM_BY_ID',
    async (itemID) => {
        return await InventoryService.getItemById(itemID);
    }
);

export const addItemAsync = createAsyncThunk(
    'POST_ITEM',
    async (item) => {
        return await InventoryService.addItem(item);
    }
);

export const patchItemAsync = createAsyncThunk(
    'UPDATE_ITEM',
    async ({itemID, updateFields}) => {
        return await InventoryService.updateItem(itemID,updateFields);
    }
);

export const deleteItemAsync = createAsyncThunk(
    'DELETE_ITEM',
    async (itemID) => {
        return await InventoryService.deleteItem(itemID);
    }
);

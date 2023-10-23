import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./reducer";

const store = configureStore({
    reducer: {
        inventory: inventoryReducer,
    },
    devTools: true
});

export default store;
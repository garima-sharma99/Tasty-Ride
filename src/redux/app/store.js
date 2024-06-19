

// Create Store

import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "../features/cartSlices";

export const store = configureStore({
    reducer: {
        allCart: cartSlices
    }
});
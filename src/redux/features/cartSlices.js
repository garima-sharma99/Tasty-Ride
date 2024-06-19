import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    carts: []
};

// Cart Slice

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {

        // Add to cart
        addToCart: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.carts[itemIndex].qty += 1;
            } else {
                const temp = { ...action.payload, qty: 1 }
                state.carts = [...state.carts, temp]
            };
        },

        // Delete from cart
        removeFromCart: (state, action) => {
            const data = state.carts.filter((e) => e.id !== action.payload);
            state.carts = data;
        },

        // Decrement from cart
        decrementCart: (state, action) => {
            const itemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);

            if (state.carts[itemIndex_dec].qty >= 1) {
                state.carts[itemIndex_dec].qty -= 1;
            };
        },

        // Clear Cart
        clearCart: (state, action) => {
            state.carts = [];
        }
    }
});

export const { addToCart, removeFromCart, decrementCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
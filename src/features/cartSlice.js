import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: 0,
    itemsInCart: [],
  },
  reducers: {
    addItems: (state, actions) => {
      state.cartItems += 1;
      state.itemsInCart = [...state.itemsInCart, actions.payload];
    },
    removeItems: (state) => {
      state.cartItems -= 1;
    },
  },
});

export const { addItems, removeItems } = cartSlice.actions;
export default cartSlice.reducer;

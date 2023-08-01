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
      for (const i of state.itemsInCart) {
        if (actions.payload.id == i[0].id) {
          i[1] += 1;
          return;
        }
      }
      const item_toB_insert = [actions.payload, 1];
      state.itemsInCart = [...state.itemsInCart, item_toB_insert];
    },
    removeItems: (state) => {
      state.cartItems -= 1;
    },
  },
});

export const { addItems, removeItems } = cartSlice.actions;
export default cartSlice.reducer;

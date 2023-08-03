import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: 0,
    itemsInCart: [],
    totalPrice: 0,
  },
  reducers: {
    addItems: (state, actions) => {
      console.log(actions.payload.price);
      state.cartItems += 1;
      state.totalPrice += actions.payload.price;
      for (const i of state.itemsInCart) {
        if (actions.payload.id == i[0].id) {
          i[1] += 1;
          return;
        }
      }
      const item_toB_insert = [actions.payload, 1];
      state.itemsInCart = [...state.itemsInCart, item_toB_insert];
    },
    searchItems: (state, acitons) => {
      let newArry = [];
      console.log(acitons.payload);
    },
    removeItems: (state, actions) => {
      state.cartItems -= 1;
      const updated_itemsIn_cart = state.itemsInCart.filter((item) => {
        if (item[0].id == actions.payload.id) {
          if (item[1] > 1) {
            item[1] -= 1;
            return;
          } else if (item[1] == 1) {
            //console.log("removing");
          }
        }
      });
      state.itemsInCart = updated_itemsIn_cart;
    },
  },
});

export const { addItems, removeItems, searchItems } = cartSlice.actions;
export default cartSlice.reducer;

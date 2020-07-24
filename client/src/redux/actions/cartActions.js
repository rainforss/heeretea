import * as types from "./actionTypes";

export function addItemToCart(item) {
  return { type: types.ADD_ITEM_TO_CART, item };
}

export function changeItemQuantity(quantity, itemName) {
  return { type: types.CHANGE_QUANTITY_OF_ITEM, quantity, itemName };
}

export function controlCartItem(quantity, index) {
  return { type: types.CONTROL_CART_ITEM, quantity, index };
}

export function deleteCartItem(index) {
  return { type: types.DELETE_CART_ITEM, index };
}

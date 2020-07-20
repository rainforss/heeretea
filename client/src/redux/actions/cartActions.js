import * as types from "./actionTypes";

export function addItemToCart(item) {
  return { type: types.ADD_ITEM_TO_CART, item };
}

export function changeItemQuantity(quantity, itemName) {
  return { type: types.CHANGE_QUANTITY_OF_ITEM, quantity, itemName };
}

export function deleteCartItem(itemName) {
  return { type: types.DELETE_CART_ITEM, itemName };
}

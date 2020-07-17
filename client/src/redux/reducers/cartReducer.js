import * as types from "../actions/actionTypes";

import update from "immutability-helper";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_ITEM_TO_CART:
      const newCartState = update(state, {
        $push: [action.item],
      });
      return newCartState;
    case types.CHANGE_QUANTITY_OF_ITEM:
      const index = state
        .map((item) => item.productName)
        .indexOf(action.itemName);
      var newQuantState = [...state];

      newQuantState[index].quantity = action.quantity;
      return newQuantState;
    default:
      return state;
  }
}

import * as types from "../actions/actionTypes";

import update from "immutability-helper";

export default function productReducer(state = {}, action) {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      var object = action.products.reduce(
        (obj, item) => Object.assign(obj, { [item.productName]: item }),
        {}
      );

      for (const property in object) {
        object[property].quantity = 0;

        object[property]["Black Pearl"] = 0;
        object[property]["White Pearl"] = 0;
        object[property]["Pudding"] = 0;
        object[property]["Cheese"] = 0;
        object[property]["Milk Foam"] = 0;
      }
      return object;
    case types.CHANGE_ICE:
      const newIceState = update(state, {
        [action.itemName]: { $merge: { icelevel: action.ice } },
      });
      return newIceState;
    case types.CHANGE_SUGAR:
      const newSugarState = update(state, {
        [action.itemName]: { $merge: { sugarlevel: action.sugar } },
      });
      return newSugarState;

    case types.CHANGE_INGREDIENTS:
      const newIngredient = update(state, {
        [action.itemName]: {
          $merge: { [action.ingredientName]: action.quantity },
        },
      });

      return newIngredient;
    case types.CHANGE_QUANTITY:
      const newQuantity = update(state, {
        [action.itemName]: { $merge: { quantity: action.quantity } },
      });
      return newQuantity;

    default:
      return state;
  }
}

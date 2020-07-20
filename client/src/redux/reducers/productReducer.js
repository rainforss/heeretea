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

        object[property]["Bubble"] = 0;
        object[property]["Jelly Ball"] = 0;
        object[property]["Brulee"] = 0;
        object[property]["Cheese"] = 0;
        object[property]["Hulless Barley"] = 0;
      }
      return object;
    case types.CHANGE_ICE:
      const newIceState = update(state, {
        [action.itemName]: { $merge: { icelevel: action.ice } },
      });
      return newIceState;

    case types.CHANGE_HOT_COLD:
      const newHotState = update(state, {
        [action.itemName]: { $merge: { isHot: action.hot } },
      });
      return newHotState;
    case types.REMOVE_ICE_SELECTION:
      var removedIce = state;
      delete removedIce[action.itemName].icelevel;
      return removedIce;
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

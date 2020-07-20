import * as types from "./actionTypes";
import axios from "axios";

export function changeIceAmount(ice, itemName) {
  return { type: types.CHANGE_ICE, ice, itemName };
}

export function changeHotCold(hot, itemName) {
  return { type: types.CHANGE_HOT_COLD, hot, itemName };
}

export function removeIceSelection(itemName) {
  return { type: types.REMOVE_ICE_SELECTION, itemName };
}

export function changeSugarAmount(sugar, itemName) {
  return { type: types.CHANGE_SUGAR, sugar, itemName };
}

export function chooseIngredients(ingredientName, quantity, itemName) {
  return { type: types.CHANGE_INGREDIENTS, ingredientName, quantity, itemName };
}

export function changeQuantity(quantity, itemName) {
  return { type: types.CHANGE_QUANTITY, quantity, itemName };
}

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_CATEGORIES_SUCCESS, categories };
}

export function loadProducts() {
  return function (dispatch) {
    return axios
      .get("/products")
      .then((products) => {
        dispatch(loadProductsSuccess(products.data));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadCategories() {
  return function (dispatch) {
    return axios
      .get("/categories")
      .then((categories) => {
        dispatch(loadCategoriesSuccess(categories.data));
      })
      .catch((error) => {
        throw error;
      });
  };
}

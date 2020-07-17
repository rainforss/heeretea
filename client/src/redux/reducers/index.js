import { combineReducers } from "redux";
import cartItems from "./cartReducer";
import products from "./productReducer";
import categories from "./categoryReducer";

const rootReducer = combineReducers({
  cartItems: cartItems,
  products: products,
  categories: categories,
});

export default rootReducer;

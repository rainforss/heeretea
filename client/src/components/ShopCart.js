import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ShopCart.css";
import OpenedShopCart from "./OpenedShopCart";

function ShopCart(props) {
  const quantity = props.cartItems.reduce((a, b) => a + b.quantity, 0);
  return (
    <div
      className="sticky-cart"
      onMouseEnter={props.mouseEnter}
      onMouseLeave={props.mouseLeave}
      onClick={props.viewFullCart}
    >
      <FontAwesomeIcon
        icon={faShoppingCart}
        color="white"
        className="badge-cart"
      />
      <span className="badge">{quantity}</span>

      <OpenedShopCart
        showCart={props.showCart}
        viewFullCart={props.viewFullCart}
      />
    </div>
  );
}

export default ShopCart;

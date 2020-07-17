import React from "react";
import "./OpenedShopCart.css";

function OpenedShopCart(props) {
  return (
    <>
      <div
        className="opened-side-cart"
        style={
          props.showCart
            ? {
                transform: "translateX(0)",
              }
            : {
                transform: "translateX(100%)",
              }
        }
      >
        <h2>I am the cart</h2>
        <div className="view-full-cart" onClick={props.viewFullCart}>
          View Cart
        </div>
        <div>Subtotal:</div>
        <div>Confirm Order</div>
      </div>
    </>
  );
}

export default OpenedShopCart;

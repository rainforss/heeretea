import React from "react";
import "./FullSizeCart.css";

function FullSizeCart(props) {
  return (
    <div
      className="full-cart-wrapper"
      style={props.isFullCartOpen ? { transform: "translateX(0)" } : {}}
    >
      <h2>Shopping Cart</h2>
      {props.cartItems.map((item) => (
        <div className="item-list">
          <span>{item.productName}</span>
          <span>{"Quantity: " + item.quantity}</span>
          <span>{"Ice: " + item.icelevel + "%"}</span>
          <span>{"Sugar: " + item.sugarlevel + "%"}</span>

          <span hidden={item["Black Pearl"] === 0}>
            {item["Black Pearl"] === 0
              ? ""
              : "Black Pearl: " + item["Black Pearl"]}
          </span>
          <span hidden={item["White Pearl"] === 0}>
            {item["White Pearl"] === 0
              ? ""
              : "White Pearl: " + item["White Pearl"]}
          </span>
          <span hidden={item["Pudding"] === 0}>
            {item["Pudding"] === 0 ? "" : "Pudding: " + item["Pudding"]}
          </span>
          <span hidden={item["Cheese"] === 0}>
            {item["Cheese"] === 0 ? "" : "Cheese: " + item["Cheese"]}
          </span>
          <span hidden={item["Milk Foam"] === 0}>
            {item["Milk Foam"] === 0 ? "" : "Milk Foam: " + item["Milk Foam"]}
          </span>
        </div>
      ))}
      <p>Prefer ordering by phone? Call us at ......</p>
      <span onClick={props.closeFullCart}>Close Cart</span>
      <div>Subtotal</div>
      <div>GST</div>
      <div>Estimated Total</div>
      <div>Check Out</div>
    </div>
  );
}

export default FullSizeCart;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import NumberInput from "./common/NumberInput";
import { v4 as uuidv4 } from "uuid";

function CartLayout(props) {
  return (
    <div
      className="full-cart-wrapper"
      style={props.isFullCartOpen ? { transform: "translateX(0)" } : {}}
    >
      <h2>Shopping Cart</h2>

      <div className="item-list">
        <table hidden={props.cartItems.length === 0}>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Ice</th>
              <th>Sugar</th>
              <th>Additional Ingredients</th>
            </tr>
          </thead>
          <tbody>
            {props.cartItems.map((item) => (
              <tr key={uuidv4()}>
                <td>
                  <FontAwesomeIcon
                    icon={faWindowClose}
                    onClick={props.completelyRemoveItem}
                    className="remove-item-btn"
                    name={item.productName}
                  />
                </td>
                <td>{item.productName}</td>
                <td>
                  <NumberInput
                    quantity={item.quantity}
                    productName={item.productName}
                    add={props.add}
                    remove={props.remove}
                  />
                </td>
                <td>{item.icelevel + "%"}</td>
                <td>{item.sugarlevel + "%"}</td>
                <td>
                  <span hidden={item["Bubble"] === 0}>
                    {item["Bubble"] === 0 ? "" : "Bubble: " + item["Bubble"]}
                  </span>
                  <span hidden={item["Jelly Ball"] === 0}>
                    {item["Jelly Ball"] === 0
                      ? ""
                      : "Jelly Ball: " + item["Jelly Ball"]}
                  </span>
                  <span hidden={item["Brulee"] === 0}>
                    {item["Brulee"] === 0 ? "" : "Brulee: " + item["Brulee"]}
                  </span>
                  <span hidden={item["Cheese"] === 0}>
                    {item["Cheese"] === 0 ? "" : "Cheese: " + item["Cheese"]}
                  </span>
                  <span hidden={item["Hulless Barley"] === 0}>
                    {item["Hulless Barley"] === 0
                      ? ""
                      : "Hulless Barley: " + item["Hulless Barley"]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="cart-summary">
        <p>Prefer ordering by phone? Call us at ......</p>

        <div>Subtotal</div>
        <div>GST</div>
        <div>Estimated Total</div>
      </div>
      <div className="cart-control">
        <span className="check-out-btn">Check Out</span>
        <span className="close-cart-btn" onClick={props.closeFullCart}>
          Close Cart
        </span>
      </div>
    </div>
  );
}

export default CartLayout;

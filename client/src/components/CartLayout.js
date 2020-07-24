import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import NumberInput from "./common/NumberInput";
import { v4 as uuidv4 } from "uuid";

function CartLayout(props) {
  const addOns = [
    { name: "Bubble", price: 0.55 },
    { name: "Jelly Ball", price: 0.99 },
    { name: "Brulee", price: 1.1 },
    { name: "Cheese", price: 1.1 },
    { name: "Hulless Barley", price: 1.1 },
  ];

  const subtotalArray = props.cartItems.map(
    (item) =>
      item.quantity *
      (item.price +
        item["Bubble"] * 0.55 +
        item["Jelly Ball"] * 0.99 +
        item["Brulee"] * 1.1 +
        item["Cheese"] * 1.1 +
        item["Hulless Barley"] * 1.1)
  );
  let subtotal;

  if (subtotalArray.length !== 0) {
    subtotal = subtotalArray.reduce((x, y) => x + y);
  }

  return (
    <div
      className="full-cart-wrapper"
      style={props.isFullCartOpen ? { transform: "translateX(0)" } : {}}
    >
      <h2>Shopping Cart</h2>
      <h3 hidden={props.cartItems.length !== 0}>
        Your cart is empty, let's fill it up!
      </h3>
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
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {props.cartItems.map((item, index) => (
              <tr key={uuidv4()}>
                <td>
                  <FontAwesomeIcon
                    icon={faWindowClose}
                    className="remove-item-btn"
                    name={item.productName}
                    data-index={index}
                    onClick={props.completelyRemoveItem}
                  />
                </td>
                <td>{item.productName}</td>
                <td>
                  <NumberInput
                    quantity={item.quantity}
                    productName={item.productName}
                    add={props.add}
                    remove={props.remove}
                    index={index}
                  />
                </td>
                <td>
                  {item.isHot
                    ? "Hot Drink"
                    : item.icelevel
                    ? item.icelevel + "%"
                    : "Fixed Ice"}
                </td>
                <td>
                  {item.sugarlevel ? item.sugarlevel + "%" : "Fixed Sugar"}
                </td>
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
                <td>
                  {(
                    item.quantity *
                    (item.price +
                      item["Bubble"] * 0.55 +
                      item["Jelly Ball"] * 0.99 +
                      item["Brulee"] * 1.1 +
                      item["Cheese"] * 1.1 +
                      item["Hulless Barley"] * 1.1)
                  ).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mobile-list">
        {props.cartItems.map((item, index) => (
          <div key={uuidv4()} className="each-item">
            <div className="cart-item-title">
              <FontAwesomeIcon
                icon={faWindowClose}
                onClick={props.completelyRemoveItem}
                className="remove-item-btn"
                name={item.productName}
                data-index={index}
              />
              {item.productName}

              <NumberInput
                quantity={item.quantity}
                productName={item.productName}
                add={props.add}
                remove={props.remove}
                index={index}
              />
            </div>

            <div>
              Ice Amount:{" "}
              {item.isHot
                ? "Hot Drink"
                : item.icelevel
                ? item.icelevel + "%"
                : "Fixed Ice"}
            </div>
            <div>
              Sugar Amount:{" "}
              {item.sugarlevel ? item.sugarlevel + "%" : "Fixed Sugar"}
            </div>
            <div>
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
            </div>
            <div>
              Price:{" "}
              {(
                item.quantity *
                (item.price +
                  item["Bubble"] * 0.55 +
                  item["Jelly Ball"] * 0.99 +
                  item["Brulee"] * 1.1 +
                  item["Cheese"] * 1.1 +
                  item["Hulless Barley"] * 1.1)
              ).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Prefer ordering by phone? Call us at ......</p>

        <div>Subtotal: {subtotal ? `${subtotal.toFixed(2)} CAD` : ""}</div>
        <div>GST: {subtotal ? `${(subtotal * 0.05).toFixed(2)} CAD` : ""}</div>
        <div>
          Estimated Total:{" "}
          {subtotal ? `${(subtotal * 1.05).toFixed(2)} CAD` : ""}
        </div>
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

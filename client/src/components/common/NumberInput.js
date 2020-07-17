import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function NumberInput(props) {
  return (
    <div name={props.addOnName}>
      <FontAwesomeIcon
        icon={faMinusCircle}
        name={props.productName}
        onClick={props.remove}
        value={props.quantity}
        className="quantity-button"
      />
      <span>{props.quantity}</span>
      <FontAwesomeIcon
        icon={faPlusCircle}
        name={props.productName}
        onClick={props.add}
        className="quantity-button"
      />
      <span hidden={!props.error} className="error">
        {props.error}
      </span>
    </div>
  );
}

export default NumberInput;

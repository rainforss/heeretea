import React from "react";
import "./FullSizeCart.css";
import { connect } from "react-redux";
import * as cartActions from "../redux/actions/cartActions";
import { bindActionCreators } from "redux";
import { ToastContainer, toast } from "react-toastify";

import CartLayout from "./CartLayout.js";

function FullSizeCart(props) {
  function completelyRemoveItem(event) {
    const toBeDeleted = event.currentTarget;
    const toBeDeletedIndex = toBeDeleted.getAttribute("data-index");
    const toBeDeletedName = toBeDeleted.getAttribute("name");
    props.cartActions.deleteCartItem(toBeDeletedIndex);
    toast.success(`${toBeDeletedName} has been removed from cart`);
  }
  /*needs improvement*/
  function add(event) {
    const toBeAdded = event.currentTarget;
    const toBeAddedIndex = toBeAdded.getAttribute("data-index");
    const newQuant = props.cartItems[toBeAddedIndex].quantity + 1;
    props.cartActions.controlCartItem(newQuant, toBeAddedIndex);
  }
  function remove(event) {
    const toBeAdded = event.currentTarget;
    const toBeAddedIndex = toBeAdded.getAttribute("data-index");
    if (props.cartItems[toBeAddedIndex].quantity !== 0) {
      var newQuant = props.cartItems[toBeAddedIndex].quantity - 1;
      if (newQuant === 0) {
      } else {
        props.cartActions.controlCartItem(newQuant, toBeAddedIndex);
      }
    }
  }
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <CartLayout
        isFullCartOpen={props.isFullCartOpen}
        cartItems={props.cartItems}
        closeFullCart={props.closeFullCart}
        completelyRemoveItem={completelyRemoveItem}
        add={add}
        remove={remove}
      />
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    cartItems: state.cartItems,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(cartActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FullSizeCart);

import React from "react";
import "./FullSizeCart.css";
import { connect } from "react-redux";
import * as cartActions from "../redux/actions/cartActions";
import { bindActionCreators } from "redux";
import { ToastContainer, toast } from "react-toastify";

import CartLayout from "./CartLayout.js";

function FullSizeCart(props) {
  function completelyRemoveItem(event) {
    const toBeDeleted = event.currentTarget.getAttribute("name");
    props.cartActions.deleteCartItem(toBeDeleted);
    toast.success(`${toBeDeleted} has been removed from cart`);
  }
  /*needs improvement*/
  function add(event) {
    const productName = event.currentTarget.getAttribute("name");
    const currentProduct = props.cartItems.find(
      (item) => item.productName === productName
    );
    const newQuant = currentProduct.quantity + 1;
    props.cartActions.changeItemQuantity(newQuant, productName);
  }
  function remove(event) {
    const productName = event.currentTarget.getAttribute("name");
    const currentProduct = props.cartItems.find(
      (item) => item.productName === productName
    );
    var newQuant;
    if (currentProduct.quantity !== 0) {
      newQuant = currentProduct.quantity - 1;
      if (newQuant === 0) {
      } else {
        props.cartActions.changeItemQuantity(newQuant, productName);
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

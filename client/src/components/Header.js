import React, { useState } from "react";
import logo from "../assets/icons/Logo.jpg";
import Hamburger from "./Hamburger";
import ToggleMenu from "./ToggleMenu";
import FixedMenu from "./FixedMenu";
import ScrollToTop from "react-scroll-up";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ShopCart from "./ShopCart";
import FullSizeCart from "./FullSizeCart";
import { connect } from "react-redux";

function Header(props) {
  const [nav, setNav] = useState({
    isOpen: false,
    style: { transform: "translateX(100%)" },
    burgerStyle: {},
    menuSlide: {},
    /* Bounce animation of back to top */
    bounce: {
      animation: "bounce 1s",
      animationDirection: "alternate",
      animationIterationCount: "infinite",
      fontSize: 50,
      zIndex: 50,
    },
  });

  const [slideCart, setSlideCart] = useState(false);
  const [fullCart, setFullCart] = useState(false);

  function handleSlide() {
    const newNav = { ...nav };
    /* Toggle burger animation */
    const burgerTransform = {
      line1: { transform: "rotate(-45deg) translate(-5px,9px)" },
      line2: { opacity: 0 },
      line3: { transform: "rotate(45deg) translate(-5px,-9px)" },
    };
    /* Toggle slide in and slide out mobile menu */
    const slideOut = { animation: "slideout 2s ease-in-out forwards" };
    const slideIn = { animation: "slidein 1s ease-in-out forwards" };
    newNav.isOpen = !newNav.isOpen;
    if (newNav.isOpen) {
      newNav.style = {
        transform: "translateX(0%)",
      };
      newNav.burgerStyle = burgerTransform;
      newNav.menuSlide = slideOut;
    } else {
      newNav.style = {
        transform: "translateX(100%)",
      };
      newNav.burgerStyle = {};
      newNav.menuSlide = slideIn;
    }
    setNav(newNav);
  }

  const handleEnterCart = (event) => {
    const isCartOpen = !slideCart;
    setSlideCart(isCartOpen);
  };

  const handleLeaveCart = (event) => {
    const isCartOpen = !slideCart;
    setSlideCart(isCartOpen);
  };

  const toggleFullCart = (event) => {
    const openFullCart = !fullCart;
    setFullCart(openFullCart);
  };

  return (
    <div className="header-container">
      <nav className="top-nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ScrollToTop style={nav.bounce} showUnder={150}>
          <span>
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        </ScrollToTop>
        <FixedMenu />

        <ToggleMenu menuSlide={nav.menuSlide} navStyle={nav.style} />
        <Hamburger burgerStyle={nav.burgerStyle} toggleSlide={handleSlide} />
      </nav>
      <ShopCart
        mouseEnter={handleEnterCart}
        mouseLeave={handleLeaveCart}
        showCart={slideCart}
        viewFullCart={toggleFullCart}
        cartItems={props.cartItems}
      />
      <FullSizeCart
        isFullCartOpen={fullCart}
        closeFullCart={toggleFullCart}
        cartItems={props.cartItems}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems,
  };
}

export default connect(mapStateToProps)(Header);

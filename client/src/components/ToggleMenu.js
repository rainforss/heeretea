import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";

function ToggleMenu(props) {
  return (
    <div className="nav-links" style={props.navStyle}>
      <NavLink style={props.menuSlide} to="/">
        Home
      </NavLink>
      <NavLink style={props.menuSlide} smooth to="#about">
        About
      </NavLink>
      <NavLink style={props.menuSlide} smooth to="#products">
        Products
      </NavLink>
      <NavLink style={props.menuSlide} smooth to="#contact">
        Contact
      </NavLink>
      <NavLink style={props.menuSlide} smooth to="#career">
        Career
      </NavLink>
    </div>
  );
}

export default ToggleMenu;

import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

function FixedMenu(props) {
  return (
    <div className="fixed-nav-links">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink smooth to="#about">
        About
      </NavLink>
      <NavLink smooth to="#products">
        Products
      </NavLink>
      <NavLink smooth to="#contact">
        Contact
      </NavLink>
      <NavLink smooth to="#career">
        Career
      </NavLink>
    </div>
  );
}

export default FixedMenu;

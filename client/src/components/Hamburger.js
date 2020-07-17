import React from "react";

function Hamburger(props) {
  return (
    <div className="hamburger" onClick={props.toggleSlide}>
      <div className="line1" style={props.burgerStyle.line1}></div>
      <div className="line2" style={props.burgerStyle.line2}></div>
      <div className="line3" style={props.burgerStyle.line3}></div>
    </div>
  );
}

export default Hamburger;

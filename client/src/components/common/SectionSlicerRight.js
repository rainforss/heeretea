import React from "react";
import "./SectionSlicerRight.css";
import Fade from "react-reveal/Fade";

function SectionSlicerRight() {
  return (
    <Fade duration={2000} right>
      <div className="slicerright-wrapper">
        <div className="slicerright-1"></div>
        <div className="slicerright-2"></div>
        <div className="slicerright-3"></div>
      </div>
    </Fade>
  );
}

export default SectionSlicerRight;

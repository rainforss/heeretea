import React from "react";
import "./SectionSlicer.css";
import Fade from "react-reveal/Fade";

function SectionSlicerLeft() {
  return (
    <Fade duration={2000} left>
      <div className="slicerleft-wrapper">
        <div className="slicerleft-1"></div>
        <div className="slicerleft-2"></div>
        <div className="slicerleft-3"></div>
      </div>
    </Fade>
  );
}

export default SectionSlicerLeft;

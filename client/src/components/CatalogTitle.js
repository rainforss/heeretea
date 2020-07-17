import React from "react";
import "./CatalogTitle.css";
import Fade from "react-reveal/Fade";

function CatalogTitle(props) {
  return (
    <div className="catalog-intro">
      <Fade right cascade>
        <div className="catalog-line1"></div>
        <div className="catalog-line2"></div>
      </Fade>
      <div className="catalog-innerwrap">
        <Fade delay={1000} left>
          <div className="catalog-title">I am a Catalog</div>
        </Fade>
        <Fade right cascade>
          <div className="title-lines">
            <div className="catalog-line3"></div>
            <div className="catalog-line4"></div>
            <div className="catalog-line5"></div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default CatalogTitle;

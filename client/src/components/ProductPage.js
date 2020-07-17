import React, { useState } from "react";
import CatalogTitle from "./CatalogTitle";
import Catalog from "./catalog/Catalog";
import ImageCarousel from "./carousel/ImageCarousel";
import "./ProductPage.css";
import Zoom from "react-reveal/Zoom";

function ProductPage() {
  const [autoPlay, setAutoPlay] = useState(true);

  function turnAutoPlay() {
    const autoPlayStatus = !autoPlay;

    setAutoPlay(autoPlayStatus);
  }

  return (
    <div className="product-page">
      <CatalogTitle />
      <Zoom left duration={2000}>
        <Catalog />
      </Zoom>
      <ImageCarousel autoPlay={autoPlay} turnAutoPlay={turnAutoPlay} />
    </div>
  );
}

export default ProductPage;

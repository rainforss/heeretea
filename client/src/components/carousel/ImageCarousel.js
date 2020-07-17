import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import seasonal from "../../assets/carouselimage/seasonal.jpg";
import milktea from "../../assets/carouselimage/milktea.jpg";
import deviltea from "../../assets/carouselimage/deviltea.jpg";
import cheesetea from "../../assets/carouselimage/cheesetea.jpg";
import lemontea from "../../assets/carouselimage/lemonseries.jpg";
import bottlemilk from "../../assets/carouselimage/bottlemilk.jpg";
import bottletea from "../../assets/carouselimage/bottletea.jpg";
import bottledisplay from "../../assets/carouselimage/bottledisplay1.jpg";
import twobottledisplay from "../../assets/carouselimage/bottledisplay2.jpg";
import "./ImageCarousel.css";
import Fade from "react-reveal/Fade";

function ImageCarousel(props) {
  return (
    <div className="carousel-container">
      <Fade duration={2000} left>
        <div className="individual-carousel">
          <Carousel
            infiniteLoop
            autoPlay={props.autoPlay}
            interval="3000"
            transitionTime="500"
            showThumbs={false}
            dynamicHeight={true}
          >
            <div>
              <img
                className="carousel-image"
                src={seasonal}
                alt="Super Fruit"
              />
              <p className="legend">Super Fruit Tea</p>
            </div>
            <div>
              <img className="carousel-image" src={milktea} alt="Super Fruit" />
              <p className="legend">Super Fruit Tea</p>
            </div>
            <div>
              <img
                className="carousel-image"
                src={deviltea}
                alt="Super Fruit"
              />
              <p className="legend">Super Fruit Tea</p>
            </div>
            <div>
              <img
                className="carousel-image"
                src={cheesetea}
                alt="Super Fruit"
              />
              <p className="legend">Super Fruit Tea</p>
            </div>
            <div>
              <img
                className="carousel-image"
                src={lemontea}
                alt="Super Fruit"
              />
              <p className="legend">Super Fruit Tea</p>
            </div>
          </Carousel>
        </div>
      </Fade>
      <Fade duration={2000} right>
        <div className="individual-carousel">
          <Carousel
            infiniteLoop
            autoPlay={props.autoPlay}
            interval="3000"
            transitionTime="500"
            showThumbs={false}
            dynamicHeight={true}
          >
            <div>
              <img
                className="carousel-image"
                src={bottlemilk}
                alt="Super Fruit"
              />
              <p className="legend">Super Fruit Tea</p>
            </div>
            <div>
              <img
                className="carousel-image"
                src={bottletea}
                alt="Super Fruit"
              />
              <p className="legend">Super Fruit Tea</p>
            </div>
            <div>
              <img
                className="carousel-image"
                src={bottledisplay}
                alt="Super Fruit"
              />
              <p className="legend">Super Fruit Tea</p>
            </div>
            <div>
              <img
                className="carousel-image"
                src={twobottledisplay}
                alt="Super Fruit"
              />
              <p className="legend">Super Fruit Tea</p>
            </div>
          </Carousel>
        </div>
      </Fade>
      <div className="autoplay-control" onClick={props.turnAutoPlay}>
        {props.autoPlay ? "Stop" : "Start"} Autoplay
      </div>
    </div>
  );
}

export default ImageCarousel;

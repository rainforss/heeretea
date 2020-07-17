import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import { NavHashLink as NavLink } from "react-router-hash-link";

function AboutPage() {
  return (
    <div>
      <Fade bottom>
        <div id="about" className="store-intro">
          <h2>About Heeretea</h2>
          <p>The story starts here...</p>
        </div>
      </Fade>

      <div className="bgimg-about">
        <div className="caption">
          <span>HEERETEA</span>
        </div>
      </div>
      <Fade left>
        <div className="team">
          <div>
            <h2>Our Team</h2>
            <p>We follow the most strict process to ensure ...</p>
          </div>
        </div>
      </Fade>
      <div className="bgimg-about-2">
        <div className="caption">
          <span>OUR VALUE</span>
        </div>
      </div>
      <Fade right>
        <div className="value">
          <div>
            <h2>Our Team</h2>
            <p>We follow the most strict process to ensure ...</p>
          </div>
        </div>
      </Fade>

      <div className="product-container"></div>
      <section id="products" className="product-intro">
        <Rotate delay={1000} top left>
          <div className="img1"></div>

          <div className="img2"></div>
        </Rotate>
        <Rotate delay={1000} top right>
          <div className="img3"></div>
        </Rotate>
        <Fade delay={500} left>
          <div className="strapline">
            <blockquote>"Let the fruitful journey begin"</blockquote>
          </div>
        </Fade>
        <Fade delay={500} right>
          <div className="cta">
            <p>
              Not Finding what you are looking for? Tell us and we will make
              your personal favorites!
            </p>
          </div>
        </Fade>

        <div className="intro-wrapper">
          <div className="intro">
            <Bounce left>
              <h2>Enjoy Our Drinks</h2>
            </Bounce>
            <Zoom delay={500} right>
              <p>Every drink special made just for the tea lovers.</p>
            </Zoom>
            <Flip left>
              <NavLink className="contact-button" smooth to="#contact">
                Contact Us
              </NavLink>
            </Flip>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;

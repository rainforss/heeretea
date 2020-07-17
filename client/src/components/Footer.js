import React from "react";
import PopularProducts from "./common/PopularProducts";
import SocialMedias from "./common/SocialMedias";
import FooterContact from "./common/FooterContact";

function Footer() {
  return (
    <div className="footer">
      <div className="disclaimer">
        <h5>&copy; 2020 Heeretea Edmonton, all rights reserved</h5>
      </div>
      <div className="footer-links">
        <div className="footer-products">
          <PopularProducts />
        </div>
        <div className="footer-social">
          <SocialMedias />
        </div>
        <div className="footer-contact">
          <FooterContact />
        </div>
      </div>
      <div className="producer">
        <h5>
          Made by <a href="//www.jakewonderland.byethost17.com">Jake Chen</a>,
          Powered by React &reg;
        </h5>
      </div>
    </div>
  );
}
export default Footer;

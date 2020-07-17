import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebookSquare,
  faTwitterSquare,
  faWeixin,
  faWeibo,
} from "@fortawesome/free-brands-svg-icons";

function SocialMedias() {
  return (
    <div className="social-section">
      <div>
        <h5>Social Medias</h5>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/heeretea.ca/?hl=en">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a href="https://www.instagram.com/heeretea.ca/?hl=en">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="https://www.instagram.com/heeretea.ca/?hl=en">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a href="https://www.instagram.com/heeretea.ca/?hl=en">
          <FontAwesomeIcon icon={faWeixin} />
        </a>
        <a href="https://www.instagram.com/heeretea.ca/?hl=en">
          <FontAwesomeIcon icon={faWeibo} />
        </a>
      </div>
    </div>
  );
}

export default SocialMedias;

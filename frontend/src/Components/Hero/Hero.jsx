import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero2_image.png";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>The</p>
            <img src={hand_icon} alt="hand icon" />
          </div>
          <p>Beauty</p>
          <p>of Handmade</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>
      
      <div className="hero-right">
        <div className="hero-image-wrapper">
          <img src={hero_image} alt="Craftsman Teaching Pottery" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

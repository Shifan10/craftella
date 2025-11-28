import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive3_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>
          Exclusive <br /> <span>designs For You</span>
        </h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div className="offers-right">
        <div className="offers-image-wrapper">
          <img src={exclusive_image} alt="Exclusive Pottery Collection" />
        </div>
      </div>
    </div>
  );
};

export default Offers;

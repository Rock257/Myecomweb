import React from "react";
import './offer.css'
import ExclusiveOffer from '../Assets/exclusive_image.png'

export default function Offer() {
  return (
    <div className="offer">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offer For You</h1>
        <p>Only On Best Seller Product</p>
        <button className="offer-btn" >Check Now</button>
      </div>
      <div className="offer-right">
        <img src={ExclusiveOffer} alt="" />
      </div>
    </div>
  );
}

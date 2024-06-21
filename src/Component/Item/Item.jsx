import React from "react";
import "./item.css";

export default function Item(props) {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="itemPrices">
        <div className="item-price-new">
          <p>{props.item_new_price}</p>
        </div>
        <div className="item-price-old">
          <p>{props.item_old_price}</p>
        </div>
      </div>
    </div>
  );
}

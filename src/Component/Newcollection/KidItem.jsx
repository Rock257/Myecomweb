import React from "react";
import "./kiditem.css";

export default function KidItem(props) {
  return (
    <div className="kids_item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item_price">
        <div className="kids_item_new_price">
          <p>{props.new_price}</p>
        </div>
        <div className="kids_item_old_price">
          <p>{props.old_price}</p>
        </div>
      </div>
    </div>
  );
}

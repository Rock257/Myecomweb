import React from "react";
import new_collections from "../Assets/new_collections";
import KidItem from "./KidItem";
import "./newcollection.css";

export default function NewCollction() {
  return (
    <div className="new-collection">
      <h1>NEW COLLLECTION</h1>
      <hr />
      <div className="collectionItem">
        {new_collections.map((item, idx) => {
          return (
            <KidItem
              key={idx}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

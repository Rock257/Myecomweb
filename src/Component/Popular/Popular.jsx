import React from "react";
import data_product from "../Assets/data";
import "./popular.css";
import Item from "../Item/Item";

export default function Popular() {
  return (
    <div className="popular">
      <h1>Popular in women catagory</h1>
      <hr />
      <div className="popular_item">
        {data_product.map((product, idx) => {
          return (
            <div>
              <Item
                key={idx}
                id={product.id}
                name={product.name}
                image={product.image}
                item_new_price={product.new_price}
                item_old_price={product.old_price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

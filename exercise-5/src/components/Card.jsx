import React from "react";

function Card({ item }) {
  return (
    <li
      key={item.id}
      className="place-item"
      style={{ border: "1px solid purple" }}
    >
      <button>
        <img src={item.image} alt={item.name} />
        <h3 style={{ color: "black" }}>{item.name}</h3>
        <h2 style={{ paddingLeft: "10px" }}>${item.price}</h2>
      </button>
    </li>
  );
}

export default Card;

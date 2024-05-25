import React from "react";

function Card({ item }) {
  return (
    <li
      key={item.id}
      className="place-item"
      style={{ border: "1px solid purple" }}
    >
      <img src={item.image} alt={item.name} />
      <h3 style={{ color: "black" }}>{item.name}</h3>
      <p style={{ paddingLeft: "10px" }}>${item.price}</p>
    </li>
  );
}

export default Card;

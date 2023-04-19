import React from "react";
import "../css/card.css";

import data from "../data.js";

export default function Card() {
  function generateSingleCard() {
    return data.map((item) => {
      const {
        id,
        title,
        price,
        coverImg,
        stats: { rating, reviewCount },
        openSpots
      } = item;
      return (
        <article key={id} className="card">
          <img
            src={"../../public/assets/" + coverImg}
            alt={title}
            className="card-img"
          />

          <div className="card-body">
            <div className="rating__location">
              <img src="../../public/assets/star-icon.png" alt="" className="star-icon" />
              <span className="rating">{rating}</span>
              <span>({reviewCount})</span>
              <span className="dot"></span>
              <span className="country">USA</span>
            </div>

            <p className="card-text">{title}</p>
            <p className="price">
              <span className="bold">From ${price}</span> / person
            </p>

            

          </div>
        </article>
      );
    });
  }

  return (
    <>
      {generateSingleCard()}
    </>
  );
}

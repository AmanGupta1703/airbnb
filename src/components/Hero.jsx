import React from "react";

import "../css/hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <img src="../../public/assets/hero-img.png" alt="" className="hero-img" />
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

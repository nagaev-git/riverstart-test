import React from "react";
import "./RateUpgrade.css";
import rateDizzyPic from "../../images/rate_upgrade_dizzy.svg";

export default function RateUpgrade() {
  return (
    <section className="rate-upgrade">
      <div className="rate-upgrade__title">
        <h2 className="rate-upgrade__title-name">Explore new features</h2>
        <img
          src={rateDizzyPic}
          alt="dizzy"
          className="rate-upgrade__title-icon"
        />
      </div>
      <div className="rate-upgrade__info"></div>
    </section>
  );
}

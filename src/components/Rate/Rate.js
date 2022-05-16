import React from "react";
import "./Rate.css";

export default function Rate() {
  const [priceValue, setPriceValue] = React.useState("6,99");

  const handleChangePlanClick = () => {
    setPriceValue((Math.random() * 100).toFixed(2));
  };

  return (
    <section className="rate">
      <div className="rate__title">
        <h1 className="rate__title-name">Invoicing Start</h1>
        <button
          onClick={handleChangePlanClick}
          type="button"
          className="rate__title-button"
        >
          Change plan
        </button>
      </div>
      <div className="rate__price">
        <h2 className="rate__price-value">
          {priceValue} €{" "}
          <span className="rate__price-value_color-gray">/mo</span>
        </h2>
      </div>
      <div className="rate__payment">
        <h3 className="rate__payment-date">
          We’ll charge 6,99 € on Jul 24, 2020
        </h3>
        <button type="button" className="rate__payment-button">
          Change card *** 5423 or billing info
        </button>
      </div>
      <div className="rate__switch">
        <button type="button" className="rate__switch-button">
          Switch to annual plan
        </button>
        <h4 className="rate__switch-caption">and save 24,00 € a year</h4>
      </div>
    </section>
  );
}

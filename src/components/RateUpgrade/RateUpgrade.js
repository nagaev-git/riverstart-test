import React from "react";
import "./RateUpgrade.css";
import rateDizzyPic from "../../images/rate_upgrade_dizzy.svg";

export default function RateUpgrade() {
  return (
    <section className="rate-upgrade">
      <div className="rate-upgrade__title">
        <h2 className="rate-upgrade__title_name">Explore new features</h2>
        <img
          src={rateDizzyPic}
          alt="dizzy"
          className="rate-upgrade__title_icon"
        />
      </div>
      <div className="rate-upgrade__info">
        <div className="rate-upgrade__info_advantages">
          <h2 className="rate-upgrade__info_name">Invoicing Premium</h2>
          <ul className="rate-upgrade__info_list">
            <li>
              <p className="rate-upgrade__info_text">
                Unlimited outgoing e-invoices
              </p>
            </li>
            <li>
              <p className="rate-upgrade__info_text">
                Unlimited connected banks
              </p>
            </li>
            <li>
              <p className="rate-upgrade__info_text">10 users</p>
            </li>
            <li>
              <p className="rate-upgrade__info_text">Expense management</p>
            </li>
          </ul>
        </div>
        <div className="rate-upgrade__info_conditions">
          <button
            type="button"
            className="rate-upgrade__info_button_close"
          ></button>
          <h2 className="rate-upgrade__info_price">
            €20.99
            <span className="rate-upgrade__info_price_size_small"> /mo</span>
          </h2>
          <h3 className="rate-upgrade__info_payment-date">
            billed annually or 24.99 € billed monthly
          </h3>
          <div type="button" className="rate-upgrade__info_button">
            <button className="rate-upgrade__info_button_compare rate-upgrade__info_button_invisible">
              Compare plans
            </button>
            <button className="rate-upgrade__info_button_upgrade">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

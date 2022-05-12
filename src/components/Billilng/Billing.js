import "./Billing.css";
import infoPic from "../../images/billing_info.svg";

export default function Billing() {
  return (
    <section className="billing">
      <nav className="billing__nav">
        <button
          type="button"
          className="billing__nav_link billing__nav_link_active"
        >
          Limits
        </button>
        <button type="button" className="billing__nav_link">
          Invoices
        </button>
      </nav>
      <ul className="billing__list">
        <li className="billing__item">
          <div className="billing__item-title">
            <p className="billing__item_name">
              Team members{" "}
              <img
                src={infoPic}
                alt="info"
                className="billing__item_name_info-pic billing__item_name_info-pic_invisible"
              />
            </p>
            <p className="billing__item_amount">
              3 <span className="billing__item_amount_total">/ 6</span>
            </p>
          </div>
          <progress
            className="billing__item_progress"
            max="6"
            value="3"
          ></progress>
          <p className="billing__item_descriptions">
            Need more members?{" "}
            <button className="billing__item_descriptions-link">
              Upgrade your plan
            </button>
          </p>
        </li>
        <li className="billing__item">
          <div className="billing__item-title">
            <p className="billing__item_name">
              Outgoing e-invoices
              <img
                src={infoPic}
                alt="info"
                className="billing__item_name_info-pic billing__item_name_info-pic_invisible"
              />
            </p>
            <p className="billing__item_amount">
              <span className="billing__item_amount_total">Unlimited</span>
            </p>
          </div>
          <progress
            className="billing__item_progress"
            max="10"
            value="10"
          ></progress>
          <p className="billing__item_descriptions">
            Send as many e-invoices as you want
            <button className="billing__item_descriptions-link"></button>
          </p>
        </li>
        <li className="billing__item">
          <div className="billing__item-title">
            <p className="billing__item_name">
              Connected sources (banks)
              <img
                src={infoPic}
                alt="info"
                className="billing__item_name_info-pic billing__item_name_info-pic_invisible"
              />
            </p>
            <p className="billing__item_amount">
              5 <span className="billing__item_amount_total">/ 5</span>
            </p>
          </div>
          <progress
            className="billing__item_progress billing__item_progress_full"
            max="5"
            value="5"
          ></progress>
          <p className="billing__item_descriptions">
            Need more banks to connect?{" "}
            <button className="billing__item_descriptions-link">
              Upgrade your plan
            </button>
          </p>
        </li>
        <li className="billing__item"></li>
        <li className="billing__item"></li>
      </ul>
    </section>
  );
}

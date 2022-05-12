import React from "react";
import "./PlanAndLimits.css";
import Rate from "../Rate/Rate";
import RateUpgrade from "../RateUpgrade/RateUpgrade";
import Billing from "../Billilng/Billing";

export default function PlanAndLimits() {
  return (
    <>
      <main className="plan-limits">
        <Rate />
        <RateUpgrade />
        <Billing />
      </main>
    </>
  );
}

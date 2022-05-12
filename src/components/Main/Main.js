import React from "react";
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import Rate from "../Rate/Rate";
import RateUpgrade from "../RateUpgrade/RateUpgrade";
import Billing from "../Billilng/Billing";

export default function Main() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Rate />
        <RateUpgrade />
        <Billing />
      </main>
    </>
  );
}

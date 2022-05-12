import React from "react";
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import Rate from "../Rate/Rate";
import RateUpgrade from "../RateUpgrade/RateUpgrade";

export default function Main() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Rate />
        <RateUpgrade />
      </main>
    </>
  );
}

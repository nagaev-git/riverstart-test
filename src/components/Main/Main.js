import React from "react";
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Header />
      </main>
      <Footer />
    </>
  );
}

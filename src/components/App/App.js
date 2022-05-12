import "./App.css";
import React from "react";
import { Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Route path="/">
          <Main />
        </Route>
        <Footer />
      </div>
    </div>
  );
}

export default App;

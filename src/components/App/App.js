import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Security from "../Security/Security";
import Notifications from "../Notifications/Notifications";
import BusinessProfile from "../BusinessProfile/BusinessProfile";
import Invoicing from "../Invoicing/Invoicing";
import PlanAndLimits from "../PlanAndLimits/PlanAndLimits";
import Team from "../Team/Team";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Sidebar />
            <Main />
          </Route>
          <Route exact path="/profile">
            <Sidebar />
            <Profile />
          </Route>
          <Route exact path="/security">
            <Sidebar />
            <Security />
          </Route>
          <Route exact path="/notifications">
            <Sidebar />
            <Notifications />
          </Route>
          <Route exact path="/security">
            <Sidebar />
            <Security />
          </Route>
          <Route exact path="/business-profile">
            <Sidebar />
            <BusinessProfile />
          </Route>
          <Route exact path="/invoicing">
            <Sidebar />
            <Invoicing />
          </Route>
          <Route exact path="/plan-and-limits">
            <Sidebar />
            <PlanAndLimits />
          </Route>
          <Route exact path="/team">
            <Sidebar />
            <Team />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="sidebar__list-title">PERSONAL</p>
      <ul className="sidebar__list">
        <li>
          <NavLink
            exact
            to="/profile"
            activeClassName="sidebar__list-link_active"
            className="sidebar__list-link"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/security"
            activeClassName="sidebar__list-link_active"
            className="sidebar__list-link"
          >
            Security
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/notifications"
            activeClassName="sidebar__list-link_active"
            className="sidebar__list-link"
          >
            Notifications
          </NavLink>
        </li>
      </ul>
      <p className="sidebar__list-title">TESLA S.R.L.</p>
      <ul className="sidebar__list">
        <li>
          <NavLink
            exact
            to="/business-profile"
            activeClassName="sidebar__list-link_active"
            className="sidebar__list-link"
          >
            Business profile
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/invoicing"
            activeClassName="sidebar__list-link_active"
            className="sidebar__list-link"
          >
            E-invoicing
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/plan-and-limits"
            activeClassName="sidebar__list-link_active"
            className="sidebar__list-link"
          >
            Plan and limits
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/team"
            activeClassName="sidebar__list-link_active"
            className="sidebar__list-link"
          >
            Team
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

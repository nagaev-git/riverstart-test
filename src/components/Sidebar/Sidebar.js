import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="sidebar__list-title">PERSONAL</p>
      <ul className="sidebar__list">
        <li className="sidebar__list-link">Profile</li>
        <li className="sidebar__list-link">Security</li>
        <li className="sidebar__list-link">Notifications</li>
      </ul>
      <p className="sidebar__list-title">TESLA S.R.L.</p>
      <ul className="sidebar__list">
        <li className="sidebar__list-link">Business profile</li>
        <li className="sidebar__list-link">E-invoicing</li>
        <li className="sidebar__list-link sidebar__list-link_active">Plan and limits</li>
        <li className="sidebar__list-link">Team</li>
      </ul>
    </aside>
  );
}

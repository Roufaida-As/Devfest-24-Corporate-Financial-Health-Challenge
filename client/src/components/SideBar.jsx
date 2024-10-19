/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import "./SideBar.css"; // Adjust the path as necessary
import { BiLogOut } from "react-icons/bi";

function Sidebar({ profilePicture, fullName, email }) {
  const [selected, setSelected] = useState("Dashboard"); // Default selected item

  const menuItems = [
    { name: "Dashboard", icon: "fas fa-th-large" },
    { name: "Cards", icon: "fas fa-credit-card" },
    { name: "Manage", icon: "fas fa-clipboard-list" },
    { name: "History", icon: "fas fa-history" },
    { name: "Settings", icon: "fas fa-cog" },
    { name: "My assistant", icon: "fas fa-robot" },
  ];

  const handleMenuClick = (name) => {
    setSelected(name);
    // Here you can add the navigation logic to the respective page
    console.log(`Navigating to ${name}`);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
  };

  return (
    <aside className="sidebar" style={{ alignItems: "center" }}>
      <div className="money-scope">
        <span className="m">M</span>
        <span className="oney-cope">oney</span>
        <span className="dollar">
          <span className="gradient-text">$</span>
        </span>
        <span className="oney-cope">cope</span>
      </div>

      <div className="profile-section">
        <img
          src={profilePicture}
          alt="User  Profile"
          className="profile-picture"
        />
        <div className="profile-info">
          <div className="profile-name">{fullName}</div>
          <div className="profile-email">{email}</div>
        </div>
      </div>

      <ul className="menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`menu-item ${selected === item.name ? "selected" : ""}`}
            onClick={() => handleMenuClick(item.name)}
          >
            <i className={item.icon}></i>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Log Out Button */}
      <div
        className="logout-button"
        onClick={handleLogout}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <BiLogOut size={24} color="white" />
        <span>Log Out</span>
      </div>
    </aside>
  );
}

export default Sidebar;

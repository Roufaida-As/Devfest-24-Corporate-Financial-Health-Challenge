/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */ import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Style/SideBar.css";
import { BiLogOut } from "react-icons/bi";

function Sidebar({ profilePicture, fullName, email }) {
  const [selected, setSelected] = useState("Dashboard");
  const [isManageOpen, setIsManageOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: "fas fa-th-large", path: "/" },
    {
      name: "Manage",
      icon: "fas fa-clipboard-list",
      dropdown: [
        { name: "Goals", path: "/Goals" },
        { name: "Reports", path: "/Reports" },
      ],
    },
    { name: "My assistant", icon: "fas fa-robot", path: "/assistant" },
  ];

  const handleMenuClick = (item) => {
    setSelected(item.name);
    if (item.dropdown) {
      setIsManageOpen(!isManageOpen);
    } else {
      navigate(item.path);
    }
  };

  const handleDropdownItemClick = (path) => {
    navigate(path);
    setIsManageOpen(false);
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
          alt="User Profile"
          className="profile-picture"
        />
        <div className="profile-info">
          <div className="profile-name">{fullName}</div>
          <div className="profile-email">{email}</div>
        </div>
      </div>

      <ul className="menu">
        {menuItems.map((item) => (
          <React.Fragment key={item.name}>
            <li
              className={`menu-item ${
                selected === item.name ? "selected" : ""
              }`}
              onClick={() => handleMenuClick(item)}
            >
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </li>
            {item.dropdown && isManageOpen && (
              <ul className="dropdown">
                {item.dropdown.map((dropdownItem) => (
                  <li
                    key={dropdownItem.name}
                    className="dropdown-item"
                    onClick={() => handleDropdownItemClick(dropdownItem.path)}
                  >
                    <span>{dropdownItem.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>

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

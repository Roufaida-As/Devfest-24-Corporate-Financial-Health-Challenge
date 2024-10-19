/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./Style/Header.css"; // Make sure to create this CSS file

function Header({ toggleSidebar, user }) {
  // Get the current hour to determine the greeting
  const currentHour = new Date().getHours();
  let greetingMessage = "Hello";

  if (currentHour < 12) {
    greetingMessage = "Good morning";
  } else if (currentHour < 18) {
    greetingMessage = "Good afternoon";
  } else {
    greetingMessage = "Good evening";
  }

  return (
    <header className="header" style={{ display: "flex" }}>
      <div className="greeting">{`${greetingMessage}, ${user.name}!`}</div>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          style={{ color: "#98c1d9" }}
        />
      </div>
    </header>
  );
}

export default Header;

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Sidebar from "/src/components/Dashboard/SideBar";
import Header from "/src/components/Dashboard/Header";
import Chart from "/src/components/Dashboard/Chart";
import "/src/components/Dashboard/Style/Dashboard.css"; // Import the CSS file
import Income from "/src/components/Dashboard/Income";
import pfp from "/src/assets/pfp.jpg";
import Transactions from "/src/components/Dashboard/Transactions";
import Available from "/src/components/Dashboard/Available";

function Goals() {
  // Sample data for the user profile
  const userProfile = {
    profilePicture: "/path/to/profile-picture.jpg",
    fullName: "John Doe",
    email: "johndoe@example.com",
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Sidebar
        profilePicture={profilePicture}
        fullName={fullName}
        email={email}
      />
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Header user={{ name: fullName }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexGrow: 1,
            gap: "30px",
          }}
        >
          <div style={{ flex: 1, padding: "20px" }}>
            <h1 className="dashboard-title">My Dashboard</h1>
            <div className="item-list" style={{ display: "flex", gap: "10px" }}>
              {["All", "Withdrawal", "Deposit", "Savings"].map((item) => (
                <div
                  key={item}
                  className={`item ${selectedItem === item ? "selected" : ""}`}
                  onClick={() => setSelectedItem(item)}
                >
                  {item}
                </div>
              ))}
            </div>
            <Chart />
            <div style={{ display: "flex", gap: "35px", marginTop: "20px" }}>
              <Available />
              <div style={{ flex: 1 }}>
                <Income
                  title="Income"
                  money="2345"
                  percentage="19"
                  color="#a4f9c8"
                />
                <Income
                  title="Expense"
                  money="2345"
                  percentage="13"
                  color="#cbaacb"
                />
              </div>
            </div>
          </div>
          <Transactions />
        </div>
      </div>
    </div>
  );
}

export default Goals;

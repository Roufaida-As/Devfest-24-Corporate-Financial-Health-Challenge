/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Sidebar from "./components/SideBar"; // Adjust the path as necessary
import Header from "./components/Header"; // Adjust the path as necessary
import Chart from "./components/Chart"; // Import the chart component
import "./App.css"; // Import the CSS file
import Income from "./components/Income";
import pfp from "./assets/pfp.jpg"; // Import the profile picture
import Transactions from "./components/Transactions";
import Available from "./components/Available";

function App() {
  const [profilePicture, setProfilePicture] = useState(pfp); // State for profile picture
  const fullName = "Hwang Hyunjin"; // User's full name
  const email = "hwanghyunjin00@gmail.com"; // User's email address
  const [selectedItem, setSelectedItem] = useState(null); // State for selected item

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar
        profilePicture={profilePicture}
        fullName={fullName}
        email={email}
      />
      <div className="app" style={{ display: "flex", flexDirection: "column" }}>
        <Header user={{ name: fullName }} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ flex: 1, padding: "20px", width: "570px" }}>
                <h1 className="dashboard-title">My Dashboard</h1>
                <div className="item-list" style={{ width: "570px" }}>
                  {["All", "Withdrawal", "Deposit", "Savings"].map((item) => (
                    <div
                      key={item}
                      className={`item ${
                        selectedItem === item ? "selected" : ""
                      }`}
                      onClick={() => setSelectedItem(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <Chart />
                <div
                  style={{
                    display: "flex",
                    width: "570px",

                    flexDirection: "row",
                    gap: "35px",
                    marginTop: "20px",
                  }}
                >
                  <div style={{ flex: 0, width: "570px" }}>
                    <Available />
                  </div>
                  <div style={{ flex: 1, width: "570px" }}>
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
      </div>
    </div>
  );
}
export default App;

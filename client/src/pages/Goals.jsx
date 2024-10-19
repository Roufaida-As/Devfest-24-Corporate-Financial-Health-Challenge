/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Sidebar from "/src/components/Dashboard/SideBar";
import Header from "/src/components/Dashboard/Header";
import Chart from "/src/components/Dashboard/Chart";
import "/src/components/Dashboard/Style/Dashboard.css"; // Import the CSS file
import Income from "/src/components/Dashboard/Income";
import pictur from "/src/assets/0c399a55685c6002002dcaf2324892f2.png"
import pfp from "/src/assets/pfp.jpg"; // Import the profile picture component
import NewGola from "../components/NewGola";

import Transactions from "/src/components/Dashboard/Transactions";
import Available from "/src/components/Dashboard/Available";

function Goals() {
  // Sample data for the user profile
  const userProfile = {
    profilePicture: pfp,
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
        profilePicture={userProfile.profilePicture}
        fullName={userProfile.fullName}
        email={userProfile.email}
      />
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Header user={{ name: userProfile.fullName }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexGrow: 1,
            gap: "30px",
          }}
        >
          <div style={{
            fontSize:"24px",
            display:"flex",
            margin:"0px 25px",
            flexDirection: "column",
            gap:""
            , width:"50%"
          }}>
            <h1 style={{
              color:"#364F6B"

            }
            }>My Financial <span style={{ color:"#CBAACB"}}>Goals</span> </h1>
            <p style={{color:"#364F6BCC" ,fontSize:"22px", fontWeight:"500", marginTop:"-15px", textAlign:"center"}}>Track your progress toward achieving your financial dreams!</p>
            <img src={pictur} alt="" style={{
              width:"220px",
              height:"250px"
              }}/>
          </div>
          <NewGola/>
        </div>
      </div>
    </div>
  );
}

export default Goals;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

function Income({ title, money, color, percentage }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(179.02deg, #cbaacb 12.26%, #FFFFFF 125.85%)",
        width: "240px",
        textAlign: "center",
        marginTop: "20px",
        // marginLeft: "-18px",
        borderRadius: "50px",
        paddingBottom: "2px",
        paddingTop: "2px",
        paddingLeft: "20px",
        paddingRight: "20px",
        lineHeight: "0.3",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: "28px", fontWeight: "900", color: "#364f6b" }}>
          {title}
        </p>
        <p style={{ marginTop: "-10px", fontWeight: "bold" }}>{money}</p>
        <p style={{ marginTop: "0px" }}> this week income</p>
      </div>
      <div>
        <HiDotsHorizontal
          style={{ fontSize: "28px", marginTop: "14px", color: "#364f6b" }}
        ></HiDotsHorizontal>
        <p
          style={{
            color: "#364f6b",
            fontWeight: "bold",
            backgroundColor: color,
            borderRadius: "50px",
            padding: "15px 25px",
            textAlign: "center",
          }}
        >
          +{percentage}%
        </p>
      </div>
    </div>
  );
}

export default Income;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Star } from "lucide-react";

const TransactionsComponent = ({ amount }) => {
  const transactions = [
    {
      id: 1,
      name: "Jumia",
      amount: -15.0,
      icon: <Star className="transaction-icon-star" size={24} />,
    },
    {
      id: 2,
      name: "Alibaba",
      amount: -18.0,
      icon: (
        <img
          src="/api/placeholder/24/24"
          alt="Alibaba"
          className="transaction-icon-image"
        />
      ),
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        borderRadius: "50px",
        width: "390px",
        height: "650px",
        boxShadow: "0px 0px 20px 5px #364f6b80",
        marginRight: "30px",
        marginTop: "60px",
        background:
          "linear-gradient(179.02deg, #CBAACB 12.26%, #FFFFFF 125.85%)",
      }}
    >
      <h2
        className="availability-title"
        style={{ paddingTop: "12px", paddingLeft: "30px" }}
      >
        Transaction
      </h2>
    </div>
  );
};

export default TransactionsComponent;

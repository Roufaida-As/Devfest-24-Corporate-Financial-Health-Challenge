/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { ChevronRight } from "lucide-react";
import "./Available.css";

const AvailabilityComponent = () => {
  const progressBarData = [
    { label: "Food", value: 45, color: "#364F6B" }, // Dark Blue
    { label: "Clothes", value: 30, color: "#A4F9C8" }, // Light Green
    { label: "Other", value: 20, color: "#98C1D9" }, // Light Blue
  ];

  return (
    <div className="availability-card">
      <div className="availability-header">
        <h2 className="availability-title">Available</h2>
        <button
          className="view-all-button"
          style={{ background: "none", border: "none" }}
        >
          View all
          <ChevronRight className="chevron-icon" size={20} />
        </button>
      </div>

      <div className="percentage-scale">
        <div className="percentage-labels">
          <span className="percentage-label">0%</span>
          <span className="percentage-label">25%</span>
          <span className="percentage-label">50%</span>
          <span className="percentage-label">75%</span>
          <span className="percentage-label">100%</span>
        </div>
      </div>

      <div className="progress-bars-container">
        {progressBarData.map((progress, index) => (
          <ProgressBar
            key={index}
            label={progress.label}
            value={progress.value}
            color={progress.color}
          />
        ))}
      </div>
    </div>
  );
};

const ProgressBar = ({ label, value, color }) => (
  <div className="progress-bar-item">
    <span
      className="progress-bar-label"
      style={{
        color: color, // Set the label color to match the progress bar color
        fontWeight: "bold", // Make the label text weight bold
      }}
    >
      {label}
    </span>
    <div className="progress-bar-background">
      <div
        className="progress-bar-fill"
        style={{
          width: `${value}%`,
          backgroundColor: color, // Set the fill color
        }}
      />
    </div>
  </div>
);

export default AvailabilityComponent;

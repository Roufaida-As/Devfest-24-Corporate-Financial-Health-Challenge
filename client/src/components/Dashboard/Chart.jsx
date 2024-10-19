/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle view

  // Data representing money flow for each month
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Cash Flow",
        data: [
          1200, 1900, 3000, 5000, 4000, 2000, 3000, 4500, 6000, 7000, 8000,
          12000,
        ], // Sample data
        backgroundColor: (context) => {
          const value = context.dataset.data[context.dataIndex];
          const maxValue = Math.max(...context.dataset.data);
          return value === maxValue ? "#364F6B" : "#98C1D9"; // Change colors as per your requirement
        },
        borderColor: "#98C1D9", // Change border color
        borderWidth: 1,
        borderRadius: 5, // Slightly rounded edges
        padding: "10px",
      },
    ],
  };

  // Determine the labels and data to display based on showAll state
  const displayedLabels = showAll ? data.labels : data.labels.slice(0, 6);
  const displayedData = showAll
    ? data.datasets[0].data
    : data.datasets[0].data.slice(0, 6);

  const options = {
    maintainAspectRatio: false, // Allow the chart to resize
    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          color: "#364F6B", // Change y-axis text color
        },
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },
      x: {
        ticks: {
          color: "#364F6B", // Change x-axis text color
        },
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#364F6B", // Change legend text color
        },
      },
      // Custom plugin to draw the title in the top left corner and add shadow to the chart border
      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        // Save the current context state
        ctx.save();
        // Set shadow properties
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)"; // Shadow color
        ctx.shadowBlur = 10; // Shadow blur
        ctx.shadowOffsetX = 5; // Shadow offset X
        ctx.shadowOffsetY = 5; // Shadow offset Y
        // Draw the chart area (to apply shadow)
        ctx.fillStyle = "white"; // Background color of the chart area
        ctx.fillRect(0, 0, chart.width, chart.height); // Fill the chart area
        // Restore the context state
        ctx.restore();
      },
    },
  };

  return (
    <div
      style={{
        height: "300px",
        width: "570px",
        background:
          "linear-gradient(179.02deg, #CBAACB 12.26%, #FFFFFF 125.85%)",
        padding: "30px",
        borderRadius: "50px",
        position: "relative",
        // marginLeft: "22%",
      }}
    >
      <button
        onClick={() => setShowAll(!showAll)}
        style={{
          fontWeight: "bold",
          position: "absolute", // Change to absolute positioning
          top: "10px",
          right: "10px", // Position the button at the top right corner
          background: "none",
          color: "#364F6B", // Button text color
          border: "none", // Remove border
          borderRadius: "5px", // Rounded corners
          padding: "10px 15px", // Padding for the button
          cursor: "pointer", // Pointer cursor on hover
        }}
      >
        {showAll ? "View Less" : "View More"} {/* Toggle button text */}
      </button>
      <Bar
        data={{
          ...data,
          labels: displayedLabels,
          datasets: [
            {
              ...data.datasets[0],
              data: displayedData,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};

export default Chart;

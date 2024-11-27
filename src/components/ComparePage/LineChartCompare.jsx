import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Don't remove this import

function LineChart({ chartData, multiAxis }) {

  const options = {
    plugins: {
      legend: {
        display: multiAxis || false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        position: "left",
      },
      crypto2: multiAxis && {
        position: "right",
      },
    },
  };

  return chartData.labels.length > 0 ? (
    <Line data={chartData} options={options} />
  ) : (
    <p>Loading chart...</p>
  );
}

export default LineChart;

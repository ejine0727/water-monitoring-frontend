import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function WebMiniChart({ history }) {
  if (!history?.labels || !history?.inflow || !history?.filter) {
    return (
      <div
        style={{
          color: "#64748b",
          textAlign: "center",
          paddingTop: "100px",
          fontSize: "12px",
        }}
      >
        Waiting for Trend Data...
      </div>
    );
  }

  const data = {
    labels: history.labels,
    datasets: [
      {
        label: "INFLOW RATE (L/m)",
        data: history.inflow,
        borderColor: "#3b82f6",
        borderWidth: 2.5,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 6,
        fill: false,
      },
      {
        label: "FILTER RATE (L/m)",
        data: history.filter,
        borderColor: "#7dd3fc",
        borderWidth: 2.5,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 6,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          color: "#fff",
          font: {
            size: 10,
            family: "'Inter', sans-serif",
            weight: "bold",
          },
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 6,
          boxHeight: 6,
        },
      },

      tooltip: {
        backgroundColor: "rgba(13, 31, 60, 0.9)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#1e3a5f",
        borderWidth: 1,
        cornerRadius: 10,
        font: {
          family: "'Inter', sans-serif",
        },
      },
    },

    scales: {
      y: {
        min: 0,
        max: 10,
        grid: {
          color: "rgba(30, 58, 95, 0.2)",
          borderDash: [5, 5],
        },
        ticks: {
          color: "#94a3b8",
          font: {
            size: 10,
          },
          stepSize: 2,
          callback: (value) => `${value} L/m`,
        },
      },

      x: {
        grid: {
          color: "rgba(30, 58, 95, 0.2)",
          borderDash: [5, 5],
        },
        ticks: {
          color: "#94a3b8",
          font: {
            size: 10,
          },
          maxRotation: 0,
          minRotation: 0,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}
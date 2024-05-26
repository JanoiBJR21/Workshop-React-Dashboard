import React from "react";
import "./Chart.css";
import ReactApexChart from "react-apexcharts";
import { motion } from "framer-motion";

const ActivityChart = () => {
  const data = [
    { dollars: 10, sales: 20 },
    { dollars: 40, sales: 24 },
    { dollars: 60, sales: 30 },
    { dollars: 80, sales: 38 },
    { dollars: 100, sales: 40 },
    { dollars: 200, sales: 45 },
    { dollars: 300, sales: 46 },
    { dollars: 400, sales: 34 },
    { dollars: 500, sales: 28 },
    { dollars: 600, sales: 26 },
    { dollars: 700, sales: 26 },
    { dollars: 800, sales: 30 },
    { dollars: 900, sales: 40 },
    { dollars: 1000, sales: 35 },
    { dollars: 1100, sales: 30 },
    { dollars: 1200, sales: 50 },
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
    },
    xaxis: {
      categories: data.map((item) => `$${item.dollars}`),
      title: {
        text: "Dollars",
      },
    },
    yaxis: {
      title: {
        text: "Sales",
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series = [
    {
      name: "Sales",
      data: data.map((item) => item.sales),
    },
  ];

  return (
    <motion.div
      className="chart activity-chart"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <h3 className="chart-title">Activities</h3>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </motion.div>
  );
};

export default ActivityChart;

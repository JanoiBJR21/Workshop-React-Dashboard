import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import "./Card.css";

const Card = ({ data }) => {
  const { title, amount, growth, icon, backgroundColor } = data;

  const numericAmount =
    title === "Total Sales" ||
    title === "Total Expenses" ||
    title === "Total Visitors"
      ? parseFloat(amount.replace(/[$,]/g, ""))
      : amount;

  const displayDollarSign =
    title === "Total Sales" || title === "Total Expenses";
  return (
    <motion.div
      className="card"
      style={{ backgroundColor }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="card--header">
        <div className="card--icon" style={{ color: backgroundColor }}>
          {icon}
        </div>
      </div>
      <div className="card--body">
        <h2 className="amount">
          <CountUp
            start={0}
            end={numericAmount}
            duration={2}
            separator=","
            prefix={displayDollarSign ? "$" : ""}
          />
        </h2>
        <div className="growth">
          <p>Total Sales</p>
          <span>{growth}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

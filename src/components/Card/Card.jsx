import React from "react";

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
    <div className="card" style={{ backgroundColor }}>
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
          <span>+12%</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

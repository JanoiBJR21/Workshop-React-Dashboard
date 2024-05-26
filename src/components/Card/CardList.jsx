import React from "react";

import { IoPerson, IoCart, IoCash, IoPeople } from "react-icons/io5";

import Card from "./Card";

const CardList = () => {
  const data = {
    sales: {
      title: "Total Sales",
      amount: "$27,340",
      growth: "+44%",
      icon: <IoCart />,
      backgroundColor: "#FFE7E7",
    },
    expenses: {
      title: "Total Expenses",
      amount: "$12,500",
      growth: "-15%",
      icon: <IoCash />,
      backgroundColor: "#CAA6A6",
    },
    visitors: {
      title: "Total Visitors",
      amount: "$15,000",
      growth: "+20%",
      icon: <IoPeople />,
      backgroundColor: "#B47B84",
    },
    orders: {
      title: "Total Orders",
      amount: "500",
      growth: "+10%",
      icon: <IoPerson />,
      backgroundColor: "#944E63",
    },
  };
  return (
    <div className="card--list">
      {Object.keys(data).map((category, index) => (
        <Card key={index} data={data[category]}/>
      ))}
    </div>
  );
};

export default CardList;

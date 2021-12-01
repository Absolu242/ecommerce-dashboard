import React from "react";
import { DemoAreaMap } from "../components/Charts/Country";
import { DemoDualAxes } from "../components/Charts/DualLine";
import DashCard from "../components/DashCard";
import SmallTable from "../components/SmallTable/SmallTable";
import {
  CardContainer,
  DashboardStyle,
  PageTop,
} from "../styles/dashboard.styles";

const items = [
  {
    img: "/icons/dollar.png",
    label: "Total Revenue",
    numbers: "$10,540",
    percent: "22,4",
    top: true,
  },
  {
    img: "/icons/basket.png",
    label: "Orders",
    numbers: "1,055",
    percent: "15,34",
    top: true,
  },
  {
    img: "/icons/person.png",
    label: "Active Sessions",
    numbers: "48",
    percent: "18,25",
    top: false,
  },
  {
    img: "/icons/person.png",
    label: "Total Sessions",
    numbers: "5,420",
    percent: "10,24",
    top: false,
  },
];

const TableOne = {
  columns: ["Name", "Date", "Amount", "Status"],
  image: false,
  items: [
    {
      name: "Jessica S",
      date: "24.05.2020",
      amount: "$124.97",
      status: "Paid",
    },
    {
      name: "Andrew S",
      date: "23.05.2020",
      amount: "$55.97",
      status: "Pending",
    },
    {
      name: "Kevin S",
      date: "24.05.2020",
      amount: "$89.90",
      status: "Paid",
    },
  ],
};

const TableTwo = {
  columns: ["Name", "Price", "Unit Sold"],
  image: true,
  items: [
    {
      image: "/smallprod.png",
      name: "Jessica S",
      price: "$124.97",
      unit: "204",
    },
    {
      image: "/smallprod.png",
      name: "Andrew S",
      price: "$55.97",
      "unit sold": "155",
    },
    {
      image: "/smallprod.png",
      name: "Kevin S",
      price: "$89.97",
      "unit sold": "120",
    },
  ],
};

export default function Dashboard() {
  return (
    <DashboardStyle>
      <PageTop>
        <h1>Dashboard</h1>

        <button className="btn-primary">
          <img src="icons/clou.png" alt="icon" /> Manage
        </button>
      </PageTop>
      <CardContainer>
        {items.map((item, i) => (
          <DashCard
            key={i}
            numbers={item.numbers}
            img={item.img}
            label={item.label}
            percent={item.percent}
            top={item.top}
          />
        ))}
      </CardContainer>

      <div className="container">
        <div className="chart">
          <DemoAreaMap />
        </div>
        <div className="chart">
          <DemoDualAxes />
        </div>
      </div>

      <div className="container">
        <SmallTable table={TableOne} />
        <SmallTable table={TableTwo} />
      </div>
    </DashboardStyle>
  );
}

import React from "react";
import { DualAxes } from "@ant-design/charts";

export const DemoDualAxes = () => {
  const data = [
    {
      month: "Jan",
      value: 0,
      count: 5,
    },
    {
      month: "Feb",
      value: 500,
      count: 4,
    },
    {
      month: "Mar",
      value: 1000,
      count: 5,
    },
    {
      month: "Apr",
      value: 5,
      count: 5,
    },
    {
      month: "May",
      value: 1500,
      count: 4.9,
    },
    {
      month: "Jun",
      value: 2000,
      count: 35,
    },
    {
      month: "Aug",
      value: 2500,
      count: 7,
    },
  ];
  const config = {
    data: [data, data],
    xField: "month",
    yField: ["value", "count"],
    geometryOptions: [
      {
        geometry: "line",
        color: "#5B8FF9",
      },
      {
        geometry: "line",
        color: "#5AD8A6",
      },
    ],
  };
  return <DualAxes {...config} />;
};

import React, { FC } from "react";
import ReactECharts from "echarts-for-react";


type BarChartProps = {
  title: string;
  data: any;
  type: string;
  labels: string[];
}

const BarChart: FC<BarChartProps> = () => {
  const data = [
    { month: "Jan", visits: 1200, purchases: 300, subscriptions: 150 },
    { month: "Feb", visits: 1500, purchases: 400, subscriptions: 200 },
    { month: "Mar", visits: 1800, purchases: 450, subscriptions: 250 },
    { month: "Apr", visits: 2000, purchases: 500, subscriptions: 300 },
    { month: "May", visits: 2200, purchases: 600, subscriptions: 350 },
    { month: "Jun", visits: 2500, purchases: 700, subscriptions: 400 },
    { month: "Jul", visits: 2700, purchases: 750, subscriptions: 420 },
    { month: "Aug", visits: 2600, purchases: 720, subscriptions: 410 },
    { month: "Sep", visits: 2300, purchases: 650, subscriptions: 380 },
    { month: "Oct", visits: 2100, purchases: 600, subscriptions: 350 },
    { month: "Nov", visits: 1900, purchases: 500, subscriptions: 300 },
    { month: "Dec", visits: 3000, purchases: 747, subscriptions: 825 },
  ];

  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
    },
    legend: { top: "5%" },
    xAxis: { type: "category", data: data.map((item) => item.month) },
    yAxis: { type: "value" },
    series: [
      {
        name: "Visitas",
        type: "bar",
        stack: "total",
        data: data.map((item) => item.visits),
        itemStyle: { color: "#007bff" },
      },
      {
        name: "Compras",
        type: "bar",
        stack: "total",
        data: data.map((item) => item.purchases),
        itemStyle: { color: "#87c4ff" },
      },
      {
        name: "Subscrições",
        type: "bar",
        stack: "total",
        data: data.map((item) => item.subscriptions),
        itemStyle: { color: "#e0f7ff" },
      },
    ],
  };

  return <ReactECharts option={options} style={{ height: 400, width: "100%" }} />;
};

export default BarChart;

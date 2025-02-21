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
    title: {
      text: "Desempenho Anual",
      left: "center",
      textStyle: { color: "#333" }
    },
    radar: {
      indicator: [
        { name: "Visitas", max: 3500 },
        { name: "Compras", max: 1000 },
        { name: "Subscrições", max: 1000 },
      ],
      splitLine: {
        lineStyle: {
          color: ["#555"],
        },
      },
      axisLine: {
        lineStyle: {
          color: "#555",
        },
      },
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Desempenho por Mês",
        type: "radar",
        areaStyle: { color: "rgba(30, 144, 255, 0.3)" },
        lineStyle: { width: 3, color: "#555" },
        data: [
          {
            value: [
              data.reduce((sum, item) => sum + item.visits, 0) / 12,
              data.reduce((sum, item) => sum + item.purchases, 0) / 12,
              data.reduce((sum, item) => sum + item.subscriptions, 0) / 12,
            ],
            name: "Média Mensal",
          },
        ],
      },
    ],
  };

  return <ReactECharts option={options} style={{ height: 500, width: "100%" }} />;
};

export default BarChart;

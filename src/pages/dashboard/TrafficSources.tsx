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
    { month: "Jul", visits: 2700, purchases: 730, subscriptions: 420 },
    { month: "Aug", visits: 2600, purchases: 720, subscriptions: 410 },
    { month: "Sep", visits: 2300, purchases: 650, subscriptions: 380 },
    { month: "Oct", visits: 2100, purchases: 600, subscriptions: 350 },
    { month: "Nov", visits: 1900, purchases: 500, subscriptions: 300 },
    { month: "Dec", visits: 3000, purchases: 747, subscriptions: 825 },
  ];

  const totalVisits = data.reduce((acc, curr) => acc + curr.visits, 0);
  const totalPurchases = data.reduce((acc, curr) => acc + curr.purchases, 0);
  const totalSubscriptions = data.reduce((acc, curr) => acc + curr.subscriptions, 0);

  const options = {
    title: {
      text: "Distribuição Anual de Tráfego",
      left: "center",
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
    },
    legend: {
      orient: "horizontal",
      bottom: "5%",
      textStyle: {
        fontSize: 12,
        color: "#555",
      },
    },
    series: [
      {
        name: "Total Anual",
        type: "pie",
        radius: ["40%", "65%"], // Donut ligeiramente mais pequeno
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: "#dce3fa",
          borderWidth: 2,
        },
        label: {
          show: true,
          position: "inside",
          formatter: "{d}%",
          fontSize: 12,
          color: "black",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: "bold",
            color: "#333",
          },
        },
        labelLine: {
          show: true,
          length: 15,
          length2: 10,
          lineStyle: {
            color: "#aaa",
          },
        },
        color: ["#007bff", "#87c4ff", "#e0f7ff"],
        data: [
          { value: totalVisits, name: "Visitas" },
          { value: totalPurchases, name: "Compras" },
          { value: totalSubscriptions, name: "Subscrições" },
        ],
        animationType: "scale",
        animationEasing: "elasticOut",
        animationDuration: 800,
      },
    ],
  };

  return <ReactECharts option={options} style={{ height: 350, width: "100%" }} />;
};

export default BarChart;
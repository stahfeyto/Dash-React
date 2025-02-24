import React, { FC, useEffect, useRef } from "react";
import ReactECharts from "echarts-for-react";
import { useMediaQuery } from "@react-hook/media-query";

type BarChartProps = {
  title: string;
  data: any;
  type: string;
  labels: string[];
};

const BarChart: FC<BarChartProps> = () => {
  const chartRef = useRef<any>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleResize = () => {
      const instance = chartRef.current?.getEchartsInstance();

      if (instance) {
        const newOptions = {
          ...instance.getOption(),
          legend: {
            orient: isMobile ? "vertical" : "horizontal",
            bottom: isMobile ? "10%" : "5%",
            textStyle: {
              fontSize: isMobile ? 10 : 12,
            },
          },
          series: [
            {
              ...instance.getOption().series[0],
              radius: isMobile ? ["30%", "55%"] : ["40%", "65%"],
              label: {
                fontSize: isMobile ? 10 : 12,
              },
              emphasis: {
                label: {
                  fontSize: isMobile ? 12 : 16,
                },
              },
            },
          ],
        };

        instance.setOption(newOptions);
        instance.resize();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
    },
    legend: {
      orient: isMobile ? "vertical" : "horizontal",
      bottom: isMobile ? "10%" : "5%",
      textStyle: {
        fontSize: isMobile ? 10 : 12,
        color: "#555",
      },
    },
    series: [
      {
        name: "Total Anual",
        type: "pie",
        radius: isMobile ? ["30%", "55%"] : ["40%", "65%"],
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
          fontSize: isMobile ? 10 : 12,
          color: "black",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: isMobile ? 12 : 16,
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

  return (
    <div className="p-6 rounded-2xl shadow-lg" style={{ backgroundColor: "rgba(02,02,02)", borderRadius: "24px" }}>
      <ReactECharts
        ref={chartRef}
        option={options}
        style={{ height: isMobile ? "300px" : "400px", width: "100%" }}
        opts={{
          renderer: "canvas",
          width: "auto",
          height: "auto",
        }}
      />
    </div>
  );
};

export default BarChart;

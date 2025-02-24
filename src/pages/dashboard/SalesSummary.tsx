import React, { FC, useEffect, useRef } from "react";
import ReactECharts from "echarts-for-react";
import { useMediaQuery } from "@react-hook/media-query";

type LineRaceChartProps = {
  title: string;
  data: any;
  type: string;
  labels: string[];
};

const LineRaceChart: FC<LineRaceChartProps> = () => {
  const chartRef = useRef<any>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleResize = () => {
      const instance = chartRef.current?.getEchartsInstance();

      if (instance) {
        const newOptions = {
          ...instance.getOption(),
          timeline: {
            ...instance.getOption().timeline,
            playInterval: isMobile ? 2000 : 1500,
          },
          title: {
            textStyle: {
              fontSize: isMobile ? 14 : 18,
            },
          },
          legend: {
            top: "5%",
            textStyle: {
              fontSize: isMobile ? 10 : 12,
            },
          },
          xAxis: {
            axisLabel: {
              fontSize: isMobile ? 10 : 12,
            },
          },
          yAxis: {
            axisLabel: {
              fontSize: isMobile ? 10 : 12,
            },
          },
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
    { month: "Jul", visits: 2700, purchases: 750, subscriptions: 420 },
    { month: "Aug", visits: 2600, purchases: 720, subscriptions: 410 },
    { month: "Sep", visits: 2300, purchases: 650, subscriptions: 380 },
    { month: "Oct", visits: 2100, purchases: 600, subscriptions: 350 },
    { month: "Nov", visits: 1900, purchases: 500, subscriptions: 300 },
    { month: "Dec", visits: 3000, purchases: 747, subscriptions: 825 },
  ];

  const months = data.map((item) => item.month);

  const options = {
    timeline: {
      axisType: "category",
      autoPlay: true,
      playInterval: isMobile ? 2000 : 1500,
      data: months,
    },
    options: months.map((month, index) => ({
      title: {
        text: `Desempenho em ${month}`,
        textStyle: {
          fontSize: isMobile ? 14 : 18,
        },
      },
      tooltip: { trigger: "axis" },
      legend: {
        top: "5%",
        textStyle: {
          fontSize: isMobile ? 10 : 12,
        },
      },
      xAxis: {
        type: "category",
        data: months.slice(0, index + 1),
        axisLabel: {
          fontSize: isMobile ? 10 : 12,
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          fontSize: isMobile ? 10 : 12,
        },
      },
      series: [
        {
          name: "Visitas",
          type: "line",
          data: data.slice(0, index + 1).map((item) => item.visits),
          itemStyle: { color: "#007bff" },
        },
        {
          name: "Compras",
          type: "line",
          data: data.slice(0, index + 1).map((item) => item.purchases),
          itemStyle: { color: "#87c4ff" },
        },
        {
          name: "Subscrições",
          type: "line",
          data: data.slice(0, index + 1).map((item) => item.subscriptions),
          itemStyle: { color: "#b5aada" },
        },
      ],
    })),
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

export default LineRaceChart;

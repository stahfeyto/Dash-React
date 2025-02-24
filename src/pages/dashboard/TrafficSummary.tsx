import React, { FC, useEffect, useRef } from "react";
import ReactECharts from "echarts-for-react";

type BarChartProps = {
  title: string;
  data: any;
  type: string;
  labels: string[];
};

const BarChart: FC<BarChartProps> = () => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const instance = chartRef.current?.getEchartsInstance();
      
      if (instance) {
        const newOptions = {
          ...instance.getOption(),
          xAxis: {
            ...instance.getOption().xAxis[0],
            axisLabel: {
              fontSize: width < 768 ? 10 : 14,
              interval: width < 768 ? 'auto' : 0,
              rotate: width < 768 ? 45 : 0
            }
          },
          yAxis: {
            ...instance.getOption().yAxis[0],
            axisLabel: {
              fontSize: width < 768 ? 10 : 14
            }
          },
          grid: {
            left: width < 768 ? '5%' : '3%',
            right: width < 768 ? '5%' : '4%',
            bottom: width < 768 ? '15%' : '3%',
            top: width < 768 ? '15%' : '10%',
            containLabel: true
          },
          legend: {
            ...instance.getOption().legend[0],
            textStyle: {
              fontSize: width < 768 ? 10 : 12
            }
          }
        };
        
        instance.setOption(newOptions);
        instance.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    { month: "Dec", visits: 3000, purchases: 747, subscriptions: 825 }
  ];

  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" }
    },
    legend: {
      top: "5%",
      textStyle: {
        fontSize: window.innerWidth < 768 ? 10 : 12
      }
    },
    grid: {
      left: window.innerWidth < 768 ? '5%' : '3%',
      right: window.innerWidth < 768 ? '5%' : '4%',
      bottom: window.innerWidth < 768 ? '15%' : '3%',
      top: window.innerWidth < 768 ? '15%' : '10%',
      containLabel: true
    },
    xAxis: {
      type: "category",
      data: data.map((item) => item.month),
      axisLabel: {
        fontSize: window.innerWidth < 768 ? 10 : 14,
        interval: window.innerWidth < 768 ? 'auto' : 0,
        rotate: window.innerWidth < 768 ? 45 : 0
      }
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontSize: window.innerWidth < 768 ? 10 : 14
      }
    },
    series: [
      {
        name: "Visitas",
        type: "bar",
        stack: "total",
        data: data.map((item) => item.visits),
        itemStyle: { color: "#007bff" }
      },
      {
        name: "Compras",
        type: "bar",
        stack: "total",
        data: data.map((item) => item.purchases),
        itemStyle: { color: "#87c4ff" }
      },
      {
        name: "Subscrições",
        type: "bar",
        stack: "total",
        data: data.map((item) => item.subscriptions),
        itemStyle: { color: "#e0f7ff" }
      }
    ]
  };

  return (
    <ReactECharts
      ref={chartRef}
      option={options}
      style={{ height: window.innerWidth < 768 ? '300px' : '400px', width: '100%' }}
      opts={{
        renderer: 'canvas',
        width: 'auto',
        height: 'auto'
      }}
    />
  );
};

export default BarChart;
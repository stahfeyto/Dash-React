import React, { useEffect, useState } from "react";
import TrafficSources from "./TrafficSources";
import SalesSummary from "./SalesSummary";
import TrafficSummary from "./TrafficSummary";
import CustomersSummary from "./CustomersSummary";

const barChartDataDemo = [
  { name: "Web", data: [11, 8, 9, 10, 3, 11, 11, 11, 12, 13, 2, 12, 5, 8, 22, 6, 8, 6, 4, 1, 8, 24, 29, 51, 40, 47, 23, 26, 50, 26, 22, 27, 46, 47, 81, 46, 40] },
  { name: "Social", data: [7, 5, 4, 3, 3, 11, 4, 7, 5, 12, 12, 15, 13, 12, 6, 7, 7, 1, 5, 5, 2, 12, 4, 6, 18, 3, 5, 2, 13, 15, 20, 47, 18, 15, 11, 10, 9] },
  { name: "Other", data: [4, 9, 11, 7, 8, 3, 6, 5, 5, 4, 6, 4, 11, 10, 3, 6, 7, 5, 2, 8, 4, 9, 9, 2, 6, 7, 5, 1, 8, 3, 12, 3, 4, 9, 7, 11, 10] },
];

const lineChartData = [
  { name: "Mobile apps", data: [50, 40, 300, 220, 500, 250, 400, 230, 500] },
  { name: "Websites", data: [30, 90, 40, 140, 290, 290, 340, 230, 400] },
];

const customersData = [
  { name: "New Customers", data: [50, 60, 140, 190, 180, 230] },
];

const getChartData = (): Promise<any[]> =>
  new Promise((resolve, reject) => {
    if (!barChartDataDemo) {
      return setTimeout(() => reject(new Error("no data")), 750);
    }
    setTimeout(() => resolve(barChartDataDemo), 750);
  });

const Dashboard = () => {
  const [barChartData, setBarChartData] = useState<any[]>([]);
  const [trafficSourceData, setTrafficSourceData] = useState<number[] | null>(null);

  useEffect(() => {
    const doChartData = async () => {
      try {
        const result = await getChartData();
        setBarChartData(result);
        setTrafficSourceData([112332, 123221, 432334, 342334, 133432]);
      } catch (error) {
        console.error("Failed to fetch chart data:", error);
      }
    };

    doChartData();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-extrabold mb-8" style={{ color: '#e0f7ff' }}>Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-gray-700" style={{color: '#e0f7ff '}}>Traffic Summary</h3>
          {barChartData ? (
            <TrafficSummary
              title="Traffic Summary"
              data={barChartData}
              type="bar"
              labels={["2022-01-20", "2022-01-21", "2022-01-22"]}
            />
          ) : (
            <div className="h-40 bg-gray-200 animate-pulse rounded-xl"></div>
          )}
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-gray-700" style={{color: '#e0f7ff '}}>Traffic Sources</h3>
          {trafficSourceData ? (
            <TrafficSources
              title="Traffic Sources"
              data={trafficSourceData}
              type="donut"
              labels={["Direct", "Internal", "Referrals", "Search Engines", "Other"]}
            />
          ) : (
            <div className="h-40 bg-gray-200 animate-pulse rounded-xl"></div>
          )}
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-gray-700" style={{color: '#e0f7ff '}}>Sales Summary</h3>
          {barChartData ? (
            <SalesSummary
              title="Sales Summary"
              data={lineChartData}
              type="line"
              labels={["Jan", "Feb", "Mar", "Apr", "May"]}
            />
          ) : (
            <div className="h-40 bg-gray-200 animate-pulse rounded-xl"></div>
          )}
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-gray-700" style={{color: '#e0f7ff '}}>New Customers</h3>
          {barChartData ? (
            <CustomersSummary
              title="Customers Summary"
              data={customersData}
              type="line"
              labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
            />
          ) : (
            <div className="h-40 bg-gray-200 animate-pulse rounded-xl"></div>
          )}  
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

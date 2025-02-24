import React from "react";

interface MiniStatisticProps {
  title: string;
  amount: string;
  icon?: JSX.Element;
}

const MiniStatistics = ({ title, amount, icon }: MiniStatisticProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{amount}</p>
      </div>
      {icon && <div className="text-4xl text-gray-500">{icon}</div>}
    </div>
  );
};

export default MiniStatistics;

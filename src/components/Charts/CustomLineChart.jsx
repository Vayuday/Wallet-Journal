import React from "react";
import { XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart } from "recharts";

const CustomLineChart = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          <p className="text-xs font-semibold text-purple-800 mb-1">
          <p className="text-sm text-gray-600">
              Amount: <span className="text-sm font-medium text-gray-800">{payload[0].value}</span>
            </className>
          </p>
        </div>
      );
    }
    return null;
  };

  return <div>CustomLineChart</div>;
};

export default CustomLineChart;
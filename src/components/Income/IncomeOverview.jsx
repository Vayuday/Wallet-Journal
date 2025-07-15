import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { prepareIncomeBarChartData } from "../../utils/helper";
import CustomBarChart from "../Charts/CustomBarChart";

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);
  }, [transactions]);

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <div className="">
        <h5 className="text-lg font-bold">Income Overview</h5>
        <p className="text-sm text-gray-400 mt-0.5">
          Track your earnings over time and analyze your income trends.
        </p>
      </div>

      <button
        className="add-btn"
        onClick={onAddIncome}
      >
        <LuPlus className="text-lg" />
        Add Income
      </button>
        </div> 
        <div className="mt-10">
            <CustomBarChart data={chartData} />
        </div>
        </div>
    
  );
};

export default IncomeOverview;

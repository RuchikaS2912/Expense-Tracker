/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Label from "./Label";
import AppContext from "../Context";

Chart.register(ArcElement, Tooltip, Legend);

const Graph = () => {
  const [chartColor, setChartColor] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [chartData, setChartData] = useState([]);

  const { labels, transactions } = useContext(AppContext);

  const doughnutConfig = {
    data: {
      datasets: [
        {
          label: "Category(count): ",
          data: chartData,
          backgroundColor: chartColor,
          borderRadius: 70,
          borderWidth: 1,
          spacing: 1,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };

  const getChartValues = () => {
    let colors = [];
    let label = [];
    let data = [];
    for (const val of labels.labelPercArray) {
      colors.push(val.color);
      label.push(val.type);
      data.push((val.percent * transactions.transactionsList.length) / 100);
    }
    setChartColor(colors);
    setChartData(data);
  };

  const getTotalAmountSpent = () => {
    let total = 0;
    for (const val of transactions.transactionsList) {
      total = total + val.amount;
    }
    setTotalAmount(total);
  };

  useEffect(() => {
    if (labels.labelPercArray.length > 0) {
      getChartValues();
    }
    if (transactions.transactionsList.length > 0) {
      getTotalAmountSpent();
    }
  }, [labels, transactions]);
  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          <Doughnut {...doughnutConfig} />
          <h3 className="mb-4 font-bold title">
            Total{" "}
            <span className="block text-3xl text-emerald-400">
              {" "}
              Rs. {totalAmount}
            </span>
          </h3>
        </div>
        <div className="flex flex-col py-10 gap-4">
          <Label />
        </div>
      </div>
    </div>
  );
};

export default Graph;

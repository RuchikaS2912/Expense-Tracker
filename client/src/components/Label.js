import React from "react";

const chartObj = [
  { type: "Savings", color: "#f9c74f", percent: 45 },
  { type: "Investment", color: "#f9c74f", percent: 20 },
  { type: "Expense", color: "rgb(54,162,235)", percent: 10 },
];
const Label = () => {
  return (
    <div>
      {chartObj.map((item, idx) => {
        return (
          <div className="labels flex justify-between mb-2" key={idx}>
            <div className="flex gap-2">
              <div
                className="w-2 h-2 rounded py-3"
                style={{ background: `${item.color}` ?? "#f9c74f" }}
              ></div>
              <h3 className="text-md">{item.type ?? ""}</h3>
            </div>
            <h3 className="font-bold">{item.percent ?? 0}%</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Label;

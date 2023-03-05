import React from "react";
import "boxicons";

const TransactionList = () => {
  const transactionList = [
    { type: "Savings", color: "#f9c74f" },
    { type: "Investment", color: "#f9c74f" },
    { type: "Expense", color: "rgb(54,162,235)" },
  ];
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {transactionList.length > 0
        ? transactionList.map((item, idx) => {
            return (
              <div
                key={idx}
                className="item flex justify-center bg-gray-50 py-2 rounded-r"
                style={{ borderRight: `8px solid ${item.color ?? "#e5e5e5"}` }}
              >
                <button className="px-3">
                  <box-icon name="trash" size="15px" color="red" />
                </button>
                <span className="block w-full">{item.type ?? ""}</span>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default TransactionList;

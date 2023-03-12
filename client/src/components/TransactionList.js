import React, { useContext, useEffect } from "react";
import "boxicons";
import AppContext from "../Context";
import colors from "../common/color";
import { deleteTransaction } from "../common/api";

const TransactionList = () => {
  const { transactions, labels } = useContext(AppContext);
  const transactionList = transactions.transactionsList ?? [];

  const getTransactionsCategoryPercentage = () => {
    let countLabels = {};
    let labelsArray = [];
    for (const element of transactions.transactionsList) {
      countLabels[element.type] = (countLabels[element.type] || 0) + 1;
    }
    for (let i = 0; i < Object.keys(countLabels).length; i++) {
      labelsArray.push({
        type: Object.keys(countLabels)[i],
        percent: (
          (Object.values(countLabels)[i] /
            transactions.transactionsList.length) *
          100
        ).toFixed(2),
        color: colors[Object.keys(countLabels)[i]],
      });
    }
    labels.setLabelPercArray(labelsArray);
  };

  useEffect(() => {
    if (
      labels.labelPercArray.length === 0 &&
      transactions.transactionsList.length !== 0
    ) {
      getTransactionsCategoryPercentage();
    }
  }, [labels]);

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {transactionList.map((item, idx) => {
        return (
          <div
            key={idx}
            className="item flex justify-center bg-gray-50 py-2 rounded-r"
            style={{
              borderRight: `8px solid ${colors[item.type] ?? "#e5e5e5"}`,
            }}
          >
            <button className="px-3" onClick={() => deleteTransaction(item)}>
              <box-icon name="trash" size="15px" color="red" />
            </button>
            <span className="block w-full">{item.name ?? ""}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionList;

/* eslint-disable */
import { useContext, useEffect } from "react";
import "../App.css";
import { getTransactionsList } from "../common/api";
import AppContext from "../Context";
import Form from "./Form";
import Graph from "./Graph";

const ExpenseTrackerUI = () => {
  const { transactions } = useContext(AppContext);
  const { setTransactionsList } = transactions;

  const getTheStateValues = async () => {
    const getTransactions = await getTransactionsList();
    setTransactionsList(getTransactions);
  };

  useEffect(() => {
    getTheStateValues();
  }, []);

  return (
    <div className="App ">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          Expense Tracker
        </h1>
        <div className="grid md:grid-cols-2 gap-4">
          <Graph />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerUI;

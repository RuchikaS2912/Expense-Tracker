import React, { useState } from "react";
import "./App.css";
import ExpenseTrackerUI from "./components/ExpenseTrackerUI";
import AppContext from "./Context";

const App = () => {
  const [category, setCategory] = useState([]);
  const [transactionsList, setTransactionsList] = useState([]);
  const [labelPercArray, setLabelPercArray] = useState([]);

  const val = {
    categories: {
      category,
      setCategory,
    },
    transactions: {
      transactionsList,
      setTransactionsList,
    },
    labels: {
      labelPercArray,
      setLabelPercArray,
    },
  };
  console.log(val);

  return (
    <AppContext.Provider value={val}>
      <ExpenseTrackerUI />
    </AppContext.Provider>
  );
};

export default App;

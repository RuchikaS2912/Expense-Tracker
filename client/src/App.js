import React, { useState } from "react";
import "./App.css";
import ExpenseTrackerUI from "./components/ExpenseTrackerUI";
import AppContext from "./Context";

const App = () => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [labelPercArray, setLabelPercArray] = useState([]);

  const val = {
    transactions: {
      transactionsList,
      setTransactionsList,
    },
    labels: {
      labelPercArray,
      setLabelPercArray,
    },
  };

  return (
    <AppContext.Provider value={val}>
      <ExpenseTrackerUI />
    </AppContext.Provider>
  );
};

export default App;

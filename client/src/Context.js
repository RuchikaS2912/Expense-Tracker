import React, { createContext, useContext } from "react";

const AppContext = createContext({
  categories: {
    category: [],
    setCategory: () => {},
  },
  transactions: {
    transactionsList: [],
    setTransactionsList: () => {},
  },
  labels: {
    labelPercArray: [],
    setLabelPercArray: () => {},
  },
});

export default AppContext;

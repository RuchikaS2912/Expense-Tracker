import { createContext } from "react";

const AppContext = createContext({
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

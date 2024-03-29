import axios from "axios";

export const submitTransactionData = async (data) => {
  await axios
    .post(
      `https://expense-tracker-server-60pt.onrender.com/api/v1/transactions`,
      data
    )
    .then((res) => {
      console.log("Posted transaction successfully");
    })
    .catch((err) => {
      console.log("Error saving the transaction");
      console.log(err.response?.data);
    });
};

export const getTransactionsList = async () => {
  return await axios
    .get(
      `https://expense-tracker-server-60pt.onrender.com/api/v1/transactions`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response?.data);
      return err.response?.data;
    });
};

export const deleteTransaction = async (data) => {
  await axios
    .delete(
      `https://expense-tracker-server-60pt.onrender.com/api/v1/transactions`,
      data
    )
    .then((res) => {
      console.log("Deleted transaction successfully");
    })
    .catch((err) => {
      console.log("Error deleting the transaction");
      console.log(err.response?.data);
    });
};

import axios from "axios";

export const getCategory = async () => {
  return await axios
    .get(`http://localhost:8080/api/v1/categories`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response?.data);
      return err.response?.data;
    });
};

export const submitTransactionData = async (data) => {
  await axios
    .post(`http://localhost:8080/api/v1/transactions`, data)
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
    .get(`http://localhost:8080/api/v1/transactions`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response?.data);
      return err.response?.data;
    });
};

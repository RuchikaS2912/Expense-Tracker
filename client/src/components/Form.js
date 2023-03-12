import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import AppContext from "../Context";
import TransactionList from "./TransactionList";
import { submitTransactionData } from "../common/api";
import colors from "../common/color";

const Form = () => {
  const { register, handleSubmit, resetField } = useForm();

  const { categories } = useContext(AppContext);

  const onSubmit = (data) => {
    console.log(data);
    submitTransactionData(data);
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              {...register("name")}
              placeholder="Salary, House Rent, SIP"
              className="form-input"
            />
          </div>
          <select className="form-input" {...register("type")}>
            {Object.keys(colors).map((item, idx) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          {/* <div className="input-group">
            <input
              type="text"
              {...register("type")}
              placeholder="Type"
              className="form-input"
            />
          </div> */}
          <div className="input-group">
            <input
              type="text"
              {...register("amount")}
              placeholder="Amount"
              className="form-input"
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Make Transaction
            </button>
          </div>
        </div>
      </form>
      <TransactionList />
    </div>
  );
};

export default Form;

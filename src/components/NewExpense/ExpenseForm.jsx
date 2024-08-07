/* eslint-disable react/prop-types */
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const handleInput = (event) => {
    if (event.target.id === "textInput") {
      setUserInput((prev) => ({
        ...prev,
        enteredTitle: event.target.value,
      }));
    }
    if (event.target.id === "amountInput") {
      setUserInput((prev) => ({
        ...prev,
        enteredAmount: event.target.value,
      }));
    }
    if (event.target.id === "dateInput") {
      const date = new Date(event.target.value);
      setUserInput((prev) => ({
        ...prev,
        enteredDate: date // Get only the date part
      }));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(userInput);
    onSaveExpenseData(userInput);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="textInput">Title</label>
          <input
            type="text"
            onChange={handleInput}
            id="textInput"
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amountInput">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="amountInput"
            onChange={handleInput}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="dateInput">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            id="dateInput"
            onChange={handleInput}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

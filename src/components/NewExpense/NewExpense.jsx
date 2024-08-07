/* eslint-disable react/prop-types */
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { v4 as uuidv4 } from "uuid";

const NewExpense = ({ onAddExpense }) => {
  const saveDataHandler = (expenseObject) => {
    const expenseData = {
      ...expenseObject,
      id: uuidv4(),
    };
    console.log(expenseData);
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveDataHandler} />
    </div>
  );
};

export default NewExpense;

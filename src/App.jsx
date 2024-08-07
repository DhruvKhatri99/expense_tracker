import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_DATA = [
  {
    id: "e1",
    enteredTitle: "Toilet Paper",
    enteredAmount: 94.12,
    enteredDate: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    enteredTitle: "New TV",
    enteredAmount: 799.49,
    enteredDate: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    enteredTitle: "Car Insurance",
    enteredAmount: 294.67,
    enteredDate: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    enteredTitle: "New Desk (Wooden)",
    enteredAmount: 450,
    enteredDate: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

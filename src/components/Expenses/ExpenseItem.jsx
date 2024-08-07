/* eslint-disable react/prop-types */
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem({ expense }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expense.enteredDate} />
        <div className="expense-item__description">
          <h2>{expense.enteredTitle}</h2>
          <div className="expense-item__price">${expense.enteredAmount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

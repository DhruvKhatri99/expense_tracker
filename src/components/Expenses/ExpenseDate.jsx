/* eslint-disable react/prop-types */
import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  const date1 = new Date(date)
  const month = date1.toLocaleString("en-Us", { month: "long" });
  const day = date1.toLocaleString("en-Us", { day: "2-digit" });
  const year = date1.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;

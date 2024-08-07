/* eslint-disable react/prop-types */
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ items }) => {
  if (items.length == 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((item) => {
        return <ExpenseItem key={item.id} expense={item} />;
      })}
    </ul>
  );
};

export default ExpenseList;

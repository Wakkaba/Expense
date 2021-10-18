import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = (props) => {
  console.log("props items", props);
  return (
    <ul className="expenses-list">
      {props.items.length === 0 && (
        <h2 className="expenses-list__fallback">Found no expenses</h2>
      )}
      {props.items.length > 0 &&
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </ul>
  );
};

import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdit(false)
  };
  const startEditingHandler = () => {
    setIsEdit(true);
  };
  const stopEditing = () => {
    setIsEdit(false);
  }

  return (
    <div className="new-expense">
      {!isEdit && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEdit && <ExpenseForm onStopEdit={stopEditing} onSaveExpenseData={saveExpenseData} />}
    </div>
  );
};

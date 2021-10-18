import React, { useEffect, useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [showForm, setShowForm] = useState(Boolean);
  //////////////////////////////////////////////////////////
  // SAFER WAY TO UPDATE STATE THAT DEPENDS ON A PREV STATE
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //
  //   const titleChangeHandler = (e) => {
  //     setUserInput((prevSate) => {
  //       return {
  //         ...userInput,
  //         enteredTitle: e.target.value,
  //       };
  //     });
  //   };

  //////////////////////////////////////////////////////////
  // useEffect(() => console.log(showForm));
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // setShowForm(true);
    // if (showForm) {
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      };
      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
      // setShowForm((showForm) => !showForm);
    // }
  };

  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
      <div
        className="new-expense__actions">
          <button type='button' onClick={props.onStopEdit}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

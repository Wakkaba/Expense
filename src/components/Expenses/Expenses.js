import React, { useEffect, useState } from "react";
import "./Expenses.css";
import { ExpensesFilter } from "./ExpenseFilter";
import { Card } from "../UI/Card";
import { ExpensesList } from "./ExpensesList";
import {ExpensesChart} from "./ExpensesChart"


export const Expenses = (props) => {
  const [filterData, setFilterData] = useState("2020");
  const saveFilterData = (chosenYear) => {
    setFilterData(chosenYear);
  };

  useEffect(() => {});

  let filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterData;
  });

  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesFilter selected={filterData} onPassingYears={saveFilterData} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

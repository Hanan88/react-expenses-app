import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterByYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p> No Item Here </p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        filteredYear={filteredYear}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterByYear={filterByYear} />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;

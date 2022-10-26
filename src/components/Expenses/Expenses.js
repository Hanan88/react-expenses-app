import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterByYear = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear, "year");
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterByYear={filterByYear} />
        {props.expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            filteredYear={filteredYear}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;

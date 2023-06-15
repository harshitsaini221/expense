import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // '&&' returns the second argument if the first condition is true. o
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilter={filterChangeHandler}
          selectedYear={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        {filteredExpenses.length === 0 && (
          <p className="expenses-list__fallback">No Expenses for this Year Found!</p>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;

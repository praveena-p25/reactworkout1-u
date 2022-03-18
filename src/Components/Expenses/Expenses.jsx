import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredyear, setFilteredYear] = useState("2020");

  const filterchangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredexpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });

  // let expenseContent = <p>No expense found</p>;
  // if (filteredexpenses.length > 0) {
  //   expenseContent = filteredexpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredyear}
          onChangeFilter={filterchangeHandler}
        />
        {/* passing list of data dynamically */}
        {/* {filteredexpenses.length === 0 ? (
          <p>No records founds</p>
        ) : (
          filteredexpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* ///////////RENDERING LIST OF DATA */}
        {/* {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        {/* {expenseContent} */}

        <ExpensesChart expenses={filteredexpenses} />
        <ExpensesList items={filteredexpenses} />

        {/* static way of passing list of data */}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
       */}
      </Card>
    </div>
  );
};

export default Expenses;

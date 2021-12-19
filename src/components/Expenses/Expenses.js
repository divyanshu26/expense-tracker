import React from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react/cjs/react.development';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2021);

  const filterdExpenses = props.items.filter((expense)=> expense.date.getFullYear().toString() === filteredYear.toString());

  const yearChangeHandler = (year) => {
    console.log(year, 'this is expenses');
    setFilteredYear(year);
    
  };

  

  return (
    <div>
      <ExpensesFilter selected={filteredYear} onYearChange={yearChangeHandler} />
      <ExpensesChart expenses={filterdExpenses}/>
      <Card className="expenses">
        <ExpensesList items={filterdExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
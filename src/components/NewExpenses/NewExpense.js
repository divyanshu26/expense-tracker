import React from 'react';
import Expenses from '../Expenses/Expenses';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';


const NewExpense = (props) => {

    const saveExpenseHandler = (addedExpense) => {
        const newExpense = {
            ...addedExpense,
            id: Math.random().toString(),
        };
        props.onNewItem(newExpense);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpenseHandler} />
        </div>
    )
}

export default NewExpense;
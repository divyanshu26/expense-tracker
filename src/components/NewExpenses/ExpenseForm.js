import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount,setEnteredAmount]  =useState('');
    // const [enterdDate,setEnteredDate] = useState('');

    const [showForm, setShowForm] = useState(false);

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })

    const titleHandler = (evt) => {
        //setEnteredTitle(evt.target.value);
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: evt.target.value };
        });
    }

    const amountHandler = (evt) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: evt.target.value };
        })
    }

    const dateHandler = (evt) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: evt.target.value };
        })
    }

    const submitHandler = (evt) => {
        evt.preventDefault();
        const input = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        }
        props.onSaveExpense(input);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        });
        setShowForm((prev)=> (!prev));

    }

    const cancelHandler = (evt) => {
        evt.preventDefault();
        setShowForm((prev)=> (!prev))
    }

    if (showForm) {
        return (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text' value={userInput.enteredTitle} onChange={titleHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type='number' value={userInput.enteredAmount} min='0.01' step='0.01' onChange={amountHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' value={userInput.enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateHandler} />
                    </div>
                    <div>
                        <button onClick={cancelHandler}>Cancel</button>
                        <button type='submit'>Add Expense</button>
                    </div>
                </div>
            </form>
        )
    } else {
        return (
            <div className="new-expense__controls">
                <div>
                    <button onClick={cancelHandler}>Add New Expense</button>
                </div>
            </div>
        )
    };
}

export default ExpenseForm;
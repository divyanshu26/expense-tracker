import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  var titleHandler = () => {
    setTitle('updated!1');

  };
  if (title != 'updated!1') {
    return (
      <li>
        <Card className='expense-item'>
          <ExpenseDate date={props.date} />
          <div className='expense-item__description'>
            <h2 className='tit'>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            <button className='ert' onClick={titleHandler}>Change Title</button>
          </div>
        </Card>
      </li>
    );
  } else {
    return (
      <div>
        this is to show return
      </div>
    )
  }
}

export default ExpenseItem;
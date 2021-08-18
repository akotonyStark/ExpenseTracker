import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
  let filteredItems = props.items

  if (filteredItems.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  } else {
    return (
      <ul className='expenses-list'>
        {filteredItems.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    )
  }
}

export default ExpensesList

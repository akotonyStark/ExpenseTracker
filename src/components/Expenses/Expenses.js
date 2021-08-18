import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const items = props.items

  const filterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear)
  }

  const filteredItems = items.filter((item) => {
    return item.date.getFullYear() == filteredYear
  })

  let content = <p>No expenses found</p>
  if (filteredItems.length > 0) {
    content = filteredItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {content}
      {/* {filteredItems.length === 0 && <p>No expenses found</p>}
      {filteredItems.length > 0 &&
        filteredItems.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
    </Card>
  )
}

export default Expenses

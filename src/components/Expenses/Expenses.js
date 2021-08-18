import React, { useState } from 'react'

import Card from '../UI/Card'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const items = props.items

  const filterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear)
  }

  const filteredItems = items.filter((item) => {
    return item.date.getFullYear() == filteredYear
  })

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesList items={filteredItems} />
    </Card>
  )
}

export default Expenses

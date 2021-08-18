import React from 'react'

const ExpensesList = (props) => {
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
}

export default ExpensesList

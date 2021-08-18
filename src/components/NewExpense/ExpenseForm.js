import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // })

  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
    //console.log(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, title: e.target.value }
    // })
  }

  const amountChangeHandler = (e) => {
    setAmount(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value,
    // })
  }

  const dateChangeHandler = (e) => {
    setDate(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // })
  }

  const submitFormHandler = (e) => {
    e.preventDefault()
    //console.log(title, amount, date)
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    }

    //console.log(expenseData)
    props.onSaveExpenseData(expenseData)
    setTitle('')
    setAmount('')
    setDate('')
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={title} />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2020-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm

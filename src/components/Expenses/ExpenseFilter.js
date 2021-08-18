import React, { useState } from 'react'

export default function ExpenseFilter(props) {
  const [filteredYear, setFilteredYear] = useState('')

  const getFilteredYearHandler = (e) => {
    //console.log(e.target.value)
    setFilteredYear(e.target.value)
  }

  //console.log(props)
  props.onChangeFilter(filteredYear)

  return (
    <div>
      <font color='white'>Filter By</font>
      <select style={{ float: 'right' }} onChange={getFilteredYearHandler}>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
      </select>
    </div>
  )
}

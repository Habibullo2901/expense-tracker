import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Addexpense = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [typepay, setTypepay] = useState('income')
  const [amount, setAmount] = useState(0)
  const [expensetype, setExpensetype] = useState('')

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let today = `${day}-${month}-${year}`
  let time = `${hour}:${minute}:${second}`

  const created = `${today} ${time}`


  // console.log(created);
  // console.log(createdTime)

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (amount === 0 || expensetype === '') {
      alert('Please fill in all fields')
      return
    }
    else {

      dispatch({ type: 'ADD_EXPENSE', amount, expensetype, typepay, created })
      navigate('/')
    }
  }

  return (
    <div className='add_expense'>
      <p className='title'>Add Expense</p>
      <form className='form' onSubmit={handleAddExpense}>
        <select onChange={(e) => setTypepay(e.target.value)}>
          <option value="income">Income</option>
          <option default value="expense">Expense</option>
        </select>
        <input type="text" value={expensetype} onChange={(e) => setExpensetype(e.target.value)} placeholder={typepay === 'expense' ? "Expense type" : "Income type"} />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Amount' />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Addexpense
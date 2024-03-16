import React from 'react'
import { useSelector } from 'react-redux'
import { FaCcMastercard } from "react-icons/fa";

const Home = () => {
  const expensedata = useSelector(state => state.expenses)
  const balance = useSelector(state => state.balance)
  console.log(balance)
  // console.log(expensedata)
  return (
    <>
      <div className='home'>
        <p className='title'>Home</p>
        <div className='bank_card'>
          <h4>Balance:</h4>
          <h2>${balance}</h2>
          <div className='card_info'>
            <p>**** **** **** 1234</p>
            <FaCcMastercard size={40} />
          </div>
        </div>
        <p className='recent'>Recent Transactions</p>
        {
          expensedata.length === 1 &&

          <div className='card'  >
              <p>{expensedata[expensedata.length - 1]?.typepay === "income" ? <span>From</span> : <span>For</span>} {expensedata[expensedata.length - 1]?.expensetype}</p>
              <p>${expensedata[expensedata.length - 1]?.amount}</p>
              <p>{expensedata[expensedata.length - 1]?.typepay === "income" ? <p style={{ color: 'green' }}>Income</p> : <p style={{ color: 'red' }}>Expense</p>}</p>
              {/* <p>{expensedata[expensedata.length - 1]?.created}</p> */}
            </div>
        }
        {
          expensedata.length === 2 && <div>

            <div className='card'>
              <p>{expensedata[expensedata.length - 1]?.typepay === "income" ? <span>From</span> : <span>For</span>} {expensedata[expensedata.length - 1]?.expensetype}</p>
              <p>${expensedata[expensedata.length - 1]?.amount}</p>
              <p>{expensedata[expensedata.length - 1]?.typepay === "income" ? <p style={{ color: 'green' }}>Income</p> : <p style={{ color: 'red' }}>Expense</p>}</p>
              {/* <p>{expensedata[expensedata.length - 1]?.created}</p> */}
            </div>

            <div className='card'>
              <p>{expensedata[expensedata.length - 2]?.typepay === "income" ? <span>From</span> : <span>For</span>} {expensedata[expensedata.length - 2]?.expensetype}</p>
              <p>${expensedata[expensedata.length - 2]?.amount}</p>
              <p>{expensedata[expensedata.length - 2]?.typepay === "income" ? <p style={{ color: 'green' }}>Income</p> : <p style={{ color: 'red' }}>Expense</p>}</p>
              {/* <p>{expensedata[expensedata.length - 2]?.created}</p> */}
            </div>
          </div>
        }
        {
          expensedata.length > 2 && <div>

            <div className='card'>
              <p>{expensedata[expensedata.length - 1]?.typepay === "income" ? <span>From</span> : <span>For</span>} {expensedata[expensedata.length - 1]?.expensetype}</p>
              <p>${expensedata[expensedata.length - 1]?.amount}</p>
              <p>{expensedata[expensedata.length - 1]?.typepay === "income" ? <p style={{ color: 'green' }}>Income</p> : <p style={{ color: 'red' }}>Expense</p>}</p>
              {/* <p>{expensedata[expensedata.length - 1]?.created}</p> */}
            </div>

            <div className='card'>
              <p>{expensedata[expensedata.length - 2]?.typepay === "income" ? <span>From</span> : <span>For</span>} {expensedata[expensedata.length - 2]?.expensetype}</p>
              <p>${expensedata[expensedata.length - 2]?.amount}</p>
              <p>{expensedata[expensedata.length - 2]?.typepay === "income" ? <p style={{ color: 'green' }}>Income</p> : <p style={{ color: 'red' }}>Expense</p>}</p>
              {/* <p>{expensedata[expensedata.length - 2]?.created}</p> */}
            </div>

            <div className='card'>
              <p>{expensedata[expensedata.length - 3]?.typepay === "income" ? <span>From</span> : <span>For</span>} {expensedata[expensedata.length - 3]?.expensetype}</p>
              <p>${expensedata[expensedata.length - 3]?.amount}</p>
              <p>{expensedata[expensedata.length - 3]?.typepay === "income" ? <p style={{ color: 'green' }}>Income</p> : <p style={{ color: 'red' }}>Expense</p>}</p>
              {/* <p>{expensedata[expensedata.length - 2]?.created}</p> */}
            </div>
          </div>
        }
      </div>

    </>
  )
}

export default Home


import React from 'react'
import { useSelector } from 'react-redux'

const History = () => {
  const expensedata = useSelector(state => state.expenses)
  return (
    <>
      <div className='history'>
        <p className='title'>History</p>
        {
          expensedata.map(pay => (
            <div className='card'>
              <p>{pay.typepay === "income" ? <span>From</span> : <span>For</span>} {pay.expensetype}</p>
              <p>${pay.amount}</p>
              <p>{pay.typepay === "income" ? <p style={{ color: 'green' }}>Income</p> : <p style={{ color: 'red' }}>Expense</p>}</p>
              <p>At: {pay.created}</p>
            </div>
          //   <div className='card'  >
          //   <p>{expensedata[expensedata.length - 1]?.typepay === "income" ? <span>From</span> : <span>For</span>} {expensedata[expensedata.length - 1]?.expensetype}</p>
          //   <p>${expensedata[expensedata.length - 1]?.amount}</p>
          //   <p>{expensedata[expensedata.length - 1]?.typepay === "income" ? <p style={{ color: 'green' }}>Income</p> : <p style={{ color: 'red' }}>Expense</p>}</p>
          //   {/* <p>{expensedata[expensedata.length - 1]?.created}</p> */}
          // </div>
          ))
        }
      </div>
    </>
  )
}

export default History
import React , {useContext} from 'react'
import {Context} from "./context/Context"

export default function IncomeExpenses() {
    let {transactions} = useContext(Context)

    let income = transactions.filter(transaction =>transaction.amount > 0)
    .reduce((acc , curr) => acc + curr.amount , 0).toFixed(2)

    let expenses = transactions.filter(transaction =>transaction.amount < 0)
    .reduce((acc , curr) => acc + -curr.amount , 0).toFixed(2)

    return (
        <div className='income-expenses d-flex justify-content-between text-center bg-white py-3 px-5 shadow-sm'>
            <div className='income pe-5 border-end'>
                <h6 className='text-uppercase fw-bold'>income</h6>
                <h4 className='text-success fw-normal'>&#36;{income}</h4>
            </div>
            <div className='expenses ps-5'>
                <h6 className='text-uppercase fw-bold'>expenses</h6>
                <h4 className='text-danger fw-normal'>&#36;{expenses}</h4>
            </div>
        </div>
    )
}

import React, { useContext } from 'react'
import {Context} from "./context/Context"


export default function Transaction({transaction}) {
    let plus = 'bg-white py-2 px-3 d-flex justify-content-between plus mb-3 shadow-sm position-relative'
    let minus = 'bg-white py-2 px-3 d-flex justify-content-between minus mb-3 shadow-sm position-relative'

    let {DeleteTransaction} = useContext(Context)
    return (
        <>
        <li id={transaction.id} className={transaction.amount < 0 ?minus : plus}>
                <span>{transaction.text}</span>
                <span>{transaction.amount < 0 ? `-$${Math.abs(transaction.amount)}`:`$${transaction.amount}`}</span>
                <button onClick={() => DeleteTransaction(transaction.id)} className='delete position-absolute top-50 end-100 translate-middle-y'>x</button>
        </li>
        </>
    )
}

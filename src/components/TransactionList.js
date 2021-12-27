import React , {useContext} from 'react'
import Transaction from "./Transaction"
import {Context} from "./context/Context"

export default function TransactionList(props) {
    const {transactions} = useContext(Context)

    return (
        <div className='transaction-list my-4'>
            <h5 className='black pb-3'>History</h5>
            <ul className='list-unstyled mt-4'>
                {transactions.length ? 
                transactions.map(transaction => 
                <Transaction key={transaction.id} transaction={transaction}/>)
                :<p className='fw-bold text-capitalize'>There is no transaction yet</p>}
            </ul>
        </div>
    )
}

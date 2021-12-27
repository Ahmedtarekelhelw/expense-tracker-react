import React , {useContext} from 'react'
import {Context} from "./context/Context"

export default function Balance() {
    let {transactions} = useContext(Context)
    
    let amounts = transactions.reduce((acc,transaction) => acc + transaction.amount,0).toFixed(2)
    return (
        <div className="balance py-4">
            <h4 className='m-0'>Your Balance</h4>
            <h1 id='balance' className='m-0'>&#36;{amounts}</h1>
        </div>
    )
}

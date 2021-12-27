import React , {useContext, useState} from 'react'
import { Context } from './context/Context'

export default function AddTransaction(props) {
    const[text , setText] = useState("")
    const[amount , setAmount] = useState("")
    
    let {AddTransaction} = useContext(Context)

    let handlesubmit = (e) => {
        e.preventDefault()
        if (text && amount) {
            let data = {id:Math.random() , text , amount:+amount}
            AddTransaction(data)
            setText("")
            setAmount("")
        }
    }
    return (
        <div className='add-transaction my-4'>
            <h5 className='pb-3 black'>Add new transaction</h5>
            <form className='py-3' onSubmit={handlesubmit}>
                <label htmlFor="text" className='pb-2 fw-bold'>Text</label>
                <input
                 id="Text"
                 type="text" 
                 placeholder="Enter Your Text..." 
                 className="form-control"
                 value={text}
                 onChange={(e) => setText(e.target.value)} />
                <label htmlFor="amount" className='pb-2 mt-3 fw-bold'>Amount<br/>(negative - expense, positive - income)</label>
                <input 
                id="Amount"
                type="number" 
                placeholder="Enter Your Amount..." 
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} />
                <input type="submit" value="Add Transaction" className="d-block w-100 btn btn-primary mt-3" />
            </form>
        </div>
    )
}

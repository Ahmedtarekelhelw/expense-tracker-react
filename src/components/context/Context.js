import {createContext , useReducer} from "react"
import {reducer} from "./reducer" 

const initState = {
    transactions: []
}



export const Context= createContext(initState)

export const ContextProv = ({children}) => {
    const [state , dispatch] = useReducer(reducer , initState)

    function AddTransaction (transaction) {
        dispatch({
            type:"add",
            payload:transaction
        })
    }
    function DeleteTransaction (id) {
        dispatch({
            type:"delete",
            payload:id
        })
    }


    return (
        <Context.Provider value={{
            transactions:state.transactions,
            AddTransaction,
            DeleteTransaction
        }}>
            {children}
        </Context.Provider>
    )
}

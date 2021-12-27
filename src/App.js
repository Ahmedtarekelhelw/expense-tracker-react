import './App.css';
import Header from "./components/Header"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"
import {ContextProv} from "./components/context/Context"



function App() {
  return (
    <ContextProv>
      <div className='my-5'>
        <Header />
        <div className='container'>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
      </ContextProv>
  );
}

export default App;

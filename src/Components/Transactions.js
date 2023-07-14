import React, { useState, useEffect } from 'react'
import { TransactionList } from '../Helpers/TransactionList'
import cancelled from '../Assets/cancelled.png'
import received from '../Assets/received.png'
import sent from '../Assets/sent.png'
import { useLocation, Link } from 'react-router-dom'

const Transactions = ( {rates, format} ) => {
  const [transactions, setTransactions] = useState(TransactionList);
  const [checkpage, setCheckpage] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/send-money') {
      setTransactions(transactions.slice(0,3))
      setCheckpage(false)
    }
    },[])


  const search = (query) => {
    let searchTerm = query.target.value.toLowerCase()
    let transList = TransactionList.filter((t) => {
      if (searchTerm === "") {
        return t;
      } else if (t.name.toLowerCase().includes(searchTerm) ||
        t.type.toLowerCase().includes(searchTerm) || 
        t.date.toLowerCase().includes(searchTerm) ||
        t.amount.toLowerCase().includes(searchTerm) ||
        t.currency.toLowerCase().includes(searchTerm) ) {
        return t;
      }
    })
    setTransactions(transList)
  }

  return (
    <div className="transactions">
      <div className="transaction-lookup">
        <h1>Transactions</h1>
        <div className="lookup">
          {checkpage 
          ? <input placeholder="Search transactions" onChange={search}/> 
          : <Link to="/transactions"><input placeholder="Search transactions" />
          <button>See All</button></Link>}
        </div>
      </div>
      <div className="transaction-items">
        {transactions.map(((trans, key) => {
          return (
            <a className={"transaction-item " + trans.type.toLowerCase()} key={key} href="#">
              <div className="transaction-left">
                <img src={ trans.type.toLowerCase() === "sent" ? sent :
                  trans.type.toLowerCase() === "received" ? received :
                  cancelled } />
                <div className="transaction-header">
                  <h2>{trans.name}</h2>
                  <p>{trans.type} • {trans.date}</p>
                </div>
              </div>
              <div className="transaction-text">
                <h2>{format(parseFloat(trans.amount))} {trans.currency}</h2>
                {trans.currency !== "USD" 
                ? <p>{format(parseFloat(trans.amount) * rates['USD'] / rates[trans.currency])} USD</p> 
                : <p>{format(parseFloat(trans.amount))} {trans.currency}</p>}
              </div>
            </a>
          )
        }))}
      </div>
      {checkpage ? null :
      <div className="mobile-button">
        <Link to="/transactions"><button>See All</button></Link>  
      </div>}
    </div>
  )
}

export default Transactions
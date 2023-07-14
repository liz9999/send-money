import React from 'react'
import '../App.css';
import Transactions from '../Components/Transactions';

const TransactionsPage = ( {format, rates} ) => {
  return (
    <div className='main-container'>
        <Transactions format={format} rates={rates} />
    </div>
  )
}

export default TransactionsPage
import React from 'react'
import Accounts from '../Components/Accounts';
import Transactions from '../Components/Transactions';
import Converter from '../Components/Converter';

const Home = ( {format, rates} ) => {
  return (
    <div className='main-container'>
        <Accounts format={format} />
        <Transactions format={format} rates={rates} />
        <Converter format={format} rates={rates} />
    </div>
  )
}

export default Home
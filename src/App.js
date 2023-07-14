import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import axios from 'axios'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import TransactionsPage from './Pages/TransactionsPage'
import Send from './Pages/Send'

function App() {
  const [rates, setRates] = useState([]);

  // ZtYzEIv2inmhIs0bWP9voG8ixPLx8fwy
  // OzPZ6I3SUajUXPLEQVHFIIakfURg3hVb

  useEffect(() => {
    const getRates = () => {
      axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=OzPZ6I3SUajUXPLEQVHFIIakfURg3hVb')
          .then(res => {
              setRates(res.data.rates);
          })
          .catch(error => console.log('error', error));
        }
      getRates();
  },[])

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 

  const format = (num) => {
    return num.toLocaleString(undefined, {maximumFractionDigits:2});
  }

  return (
    <div className="App">
      <BrowserRouter> 
        <Wrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/send-money" replace={true} />} />
            <Route path="/send-money" element={<Home format={format} rates={rates}/>} />
            <Route path="/transactions" element={<TransactionsPage format={format} rates={rates}/>} />
            <Route path="/send" element={<Send format={format} rates={rates} />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;

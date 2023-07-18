import React, { useState } from 'react'
import CurrencyInputs from './CurrencyInputs';
import RatesTable from './RatesTable';
import { Link } from 'react-router-dom'

const Converter = ( {format, rates} ) => {
    const [amount1, setAmount1] = useState(0);
    const [amount2, setAmount2] = useState(0);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('KRW');
    const currencies = Object.keys(rates);
    
    const handleAmount1Change = (amount1) => {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setAmount1(amount1);
    }

    const handleCurrency1Change = (currency1) => {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setCurrency1(currency1);
    }

    const handleAmount2Change = (amount2) => {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setAmount2(amount2);
    }

    const handleCurrency2Change = (currency2) => {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setCurrency2(currency2)
    }
    
  return (
    <div className="transfer-request-container">
        <h1>Currency Converter</h1>
        <div className="conversion-parts">
            <div className="currency-converter">
                <h3>You send</h3>
                <CurrencyInputs onAmountChange={handleAmount1Change} onCurrencyChange={handleCurrency1Change}
                currencies={currencies} amount={amount1} currency={currency1} disabled={false}/>
                <h3>Recipient receives</h3>
                <CurrencyInputs onAmountChange={handleAmount2Change} onCurrencyChange={handleCurrency2Change}
                currencies={currencies} amount={amount2} currency={currency2} disabled={false}/>
                <div className="money-button">
                    <Link to="/send" state={{ amount1, amount2, currency1, currency2 }}>
                        Send Money
                    </Link>
                </div>
            </div>
            <div className="account-rates">
                <RatesTable rates={rates} />
            </div>
        </div>
    </div>
  );
}

export default Converter
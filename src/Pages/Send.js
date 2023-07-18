import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CurrencyInputs from '../Components/CurrencyInputs';


const Send = ( {format, rates} ) => {
    const location = useLocation();

    const [amount1, setAmount1] = useState(0);
    const [amount2, setAmount2] = useState(0);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('KRW');
    const currencies = Object.keys(rates);

    useEffect(() => {
        if (location.state) {
            setAmount1(location.state.amount1)
            setAmount2(location.state.amount2)
            setCurrency1(location.state.currency1)
            setCurrency2(location.state.currency2)
        }
    },[])
    
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

    const [lock, setLock] = useState(false)

    const handleLock = () => {
        setLock(!lock)
    }

    const genYears = () => {
        const years = [];
        let start = 1900;
        let end = new Date().getFullYear() - 18;

        for (let i = end; i >= start; i--) {
            years.push(<option value={i}>{i}</option>)
        }

        return years;
    }

  return (
    <div className="main-container">
        <div className="transfer-request-container">
            <h1>Currency Converter</h1>
            <div className="conversion-parts">
                <div className="currency-converter">
                    <h3>You send</h3>
                    <CurrencyInputs onAmountChange={handleAmount1Change} onCurrencyChange={handleCurrency1Change}
                    currencies={currencies} amount={amount1} currency={currency1} disabled={lock}/>
                    <h3>Recipient receives</h3>
                    <CurrencyInputs onAmountChange={handleAmount2Change} onCurrencyChange={handleCurrency2Change}
                    currencies={currencies} amount={amount2} currency={currency2} disabled={lock}/>
                    <div className="money-button">
                        {!lock ? <button onClick={handleLock}>Lock-in Rate</button> :
                        <button onClick={handleLock}>Unlock Rate</button>}
                    </div>
                </div>
            </div>
        </div>
        <div className="recipient-information">
            <h1>Bank Details</h1>
            <div className="info-items">
                <div className="info">
                    <label>Recipient's email</label>
                    <input />
                </div>
                <div className="info">
                    <label>Recipient's full name</label>
                    <input />
                </div>
                <div className="info">
                    <label>Recipient's date of birth</label>
                    <div className="dob">
                        <select>
                            {genYears()}
                        </select>
                        <input placeholder="Month"/>
                        <input placeholder="Day" maxlength="2"/>
                    </div>
                </div>
                <div className="info">
                    <label>Recipient's phone number</label>
                    <input />
                </div>
                <div className="info">
                    <label>Recipient's bank name</label>
                    <input />
                </div>
                <div className="info">
                    <label>Recipient's account number</label>
                    <input />
                </div>
                <button className="send-info">Send Money</button>
            </div>
        </div>
    </div>
  )
}

export default Send
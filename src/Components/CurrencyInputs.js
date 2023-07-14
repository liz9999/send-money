import React from 'react'

const CurrencyInputs = ({ amount, currencies, currency, onAmountChange, onCurrencyChange }) => {
  return (
    <div className="currency-box">
        <input className="currency-input" type="text" value={amount} onChange={(e) => onAmountChange(e.target.value)} />
        <select className="currency-type" value={currency} onChange={(e) =>  onCurrencyChange(e.target.value)}>
            {currencies.map((currency => (
                <option value={currency}>{currency}</option>)
                ))}
        </select>
    </div>
  )
}

export default CurrencyInputs
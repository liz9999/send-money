import React from 'react'

const CurrencyInputs = ({ amount, currencies, currency, onAmountChange, onCurrencyChange, disabled }) => {
  return (
    <div className="currency-box">
        <input className="currency-input" type="text" disabled={disabled} value={amount} onChange={(e) => onAmountChange(e.target.value)} />
        <select className="currency-type" disabled={disabled} value={currency} onChange={(e) =>  onCurrencyChange(e.target.value)}>
            {currencies.map((currency => (
                <option value={currency}>{currency}</option>)
                ))}
        </select>
    </div>
  )
}

export default CurrencyInputs
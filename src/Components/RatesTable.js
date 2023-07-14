import React from 'react'
import { AccountList } from '../Helpers/AccountList'

const RatesTable = ( {rates} ) => {
    const currencyList = AccountList.map((c) => c.short);

  return (
    <>
        <table className="rate-table">
            <tbody>
                <tr>
                    <th className="currency-name">Currency</th>
                    <th className="currency-rate">Rate per $1 USD</th>
                </tr>
                {currencyList.map((cur, key) => {
                    return (
                        <tr className={cur} key={key}>
                            <td className="currency-name">{cur}</td>
                            <td className="currency-rate">{rates[cur]}</td>
                        </tr>
                    )
                })}    
            </tbody>
        </table>
        
    </>
  )
}

export default RatesTable
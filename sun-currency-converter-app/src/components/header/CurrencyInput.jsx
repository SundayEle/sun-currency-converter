import React from 'react'
import PropTypes from "prop-types";
import "./currencyinput.scss"

function CurrencyInput(props) {
  return (
    <div className="group">
        <input type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} className="_inputbox"/>
        <select value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)} className="_selectbox">
            {props.currencies.map((currency => (
                <option value={currency}>{currency}</option>
            )))}
        </select>
    </div>
  )
}

CurrencyInput.propTypes = {
    amount : PropTypes.number.isRequired,
    currency : PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
};

export default CurrencyInput
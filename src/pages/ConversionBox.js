import React from 'react';

export default function ConversionBox(props) {
    const{
        currencyOptions,
        selectCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props;

    return(
        <div>
            <input type = "number" className = "num" value = {amount} onChange={onChangeAmount}/>
            <select value={selectCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}> {option} </option>
                ))}
                
            </select>
        </div>
    )
}
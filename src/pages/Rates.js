import React, { useEffect, useState } from 'react';
import ConversionBox from './ConversionBox';
import './css/Rates.css';
import { API_KEY } from './config';

//setting up of linking in the API for exchange rates
var myHeaders = new Headers();
myHeaders.append("apikey",API_KEY);

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const BASE_URL = "https://api.apilayer.com/exchangerates_data/latest"

export default function Rates() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  //console.log(currencyOptions); //use for checking the currencyOptions
  const [fromCurrency, setFromCurrency] = useState(); //base currency
  const [toCurrency, setToCurrency] = useState(); //changed currency
  const [exchangeRate, setExchangeRate] = useState()
  //console.log(exchangeRate); //check exchange rate
  const [amount, setAmount] = useState(1);
  const [inputFromAmount, setInputFromAmount] = useState(true);

  let toAmount, fromAmount = 0;
  if (inputFromAmount) { //if loop to check if input is in top or bottom cell
    fromAmount = amount;
    toAmount = amount * exchangeRate || 0;
  }
  else{
    toAmount = amount;
    fromAmount = amount / exchangeRate || 0;
  }

  //fetch link for exchange rates data
  useEffect( ()=>{
    fetch("https://api.apilayer.com/exchangerates_data/latest?base=SGD", requestOptions)
    .then(res => res.json())
    .then(data => {
      const changeCurrency = Object.keys(data.rates)[0]; //for bottom initial selection
      setCurrencyOptions([...Object.keys(data.rates)]);  //storing of data information from data in setCurrencyOptions for useState above to update setCurrency
      setFromCurrency(data.base);
      setToCurrency(changeCurrency);
      setExchangeRate(data.rates[changeCurrency]);
      })
    },[]);
   
    useEffect( ()=>{
      if(fromCurrency != null && toCurrency != null){
        fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`, requestOptions)
      .then(res => res.json())
      .then(data => setExchangeRate(data.rates[toCurrency]))
      }
    },[fromCurrency,toCurrency]);
  
  
  //conversion based on currency pair
    function changeFromAmount(e) {
      setAmount(e.target.value);
      setInputFromAmount(true);
    }
  
    function changeToAmount(e) {
      setAmount(e.target.value);
      setInputFromAmount(false);
    }

    return (
        <div id="Rates">
          <div className="conversion">
            <h1>Currency Conversion</h1>
            <ConversionBox
              currencyOptions={currencyOptions} 
              selectCurrency={fromCurrency}
              onChangeCurrency = {e => setFromCurrency(e.target.value)} //e.target.value for midifying the properties when selected.
              onChangeAmount = {changeFromAmount}
              amount = {fromAmount}
              />
            <div className="equal">=</div>
            <ConversionBox
              currencyOptions = {currencyOptions} 
              selectCurrency = {toCurrency}
              onChangeCurrency = {e => setToCurrency(e.target.value)}
              onChangeAmount = {changeToAmount}
              amount = {toAmount}
            />
          </div>
        </div>
      );
    
    }
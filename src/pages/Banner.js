import React from 'react';
import './css/Banner.css';

export default function Banner(){
    return(
        <div className="banner">
            <div className="banner-info">
                <h1>Welcome to Currency eChecker</h1>
                <p>Find out more about the latest currency rates and money changer location!</p>
                <p></p>
                <p>-</p>
                <a href="Rates">Search Rates Now!</a>
                <p></p>
                <p>-</p>
                <a href="MoneyChanger">Where to change?</a>
            </div>
            
        </div>
    );
}
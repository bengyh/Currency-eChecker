import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MoneyChanger  from './location/MoneyChanger';
import Banner from './pages/Banner';
import Rates from './pages/Rates';
import './App.css';

export default function App() {
  return (
    <div>
      <nav>
        <a href="/">
          <div className="navbar">
            <h4 className="logo">Currency eChecker</h4>
          </div>
        </a>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Banner/>} />
          <Route path="/Rates" element={<Rates />} />
          <Route path="/MoneyChanger" element={<MoneyChanger />} />
        </Routes>
      </main>
    </div>
  );
  
}
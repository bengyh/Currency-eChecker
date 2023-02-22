import {Route, Routes} from 'react-router-dom';
import React from 'react';
import './css/MoneyChanger.css';

export default function MoneyChanger() {
  return (
    <div className='MC'>
      <h1>Money Changer</h1>
      <div className='map'>
        <div className='one'>
          <h2>North</h2>
        </div>
        <iframe width="450" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=Arcade%20Money%20Changers%20(%20AMC%20sg%20)&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <div className='two'>
          <h2>East</h2>
        </div>
        <iframe width="450" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=eastpoint%20money%20changer&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <div className='three'>
          <h2>Central</h2>
        </div>
        <iframe width="450" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=express%20money%20exchange&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <div className='four'>
          <h2>West</h2>
        </div>
        <iframe width="450" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=million%20dollar%20exchange&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
    </div>
  );
  
}
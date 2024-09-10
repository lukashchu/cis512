import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import VirgoIcon from "./Virgo.svg";

function App() {
  const [selectedDate, setSelectedDate] = useState("9/9");

  const handleSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="Vertical-app">
      <div className="sun-icon">
        <i className="wi wi-day-sunny sun"></i>
      </div>
      <div className="weather-info">
        <div className="temperature">
          <span className="temp-value">78°F</span>
        </div>
        <div className="rain-info">
          <i className="wi wi-rain sun"></i>
          <span className="rain-chance">0%</span>
        </div>
      </div>
      <div className="stats-panel">
        <div className="stat-item">
          <i className="wi wi-strong-wind wind"></i>
          <span className="stat-value">10 MPH</span>
        </div>
        <div className="stat-item">
          <i className="wi wi-sprinkle humidity"></i> 
          <span className="stat-value">65%</span>
        </div>
        <div className="stat-item">
          <i className="wi wi-day-sunny sun-uv"></i>
          <span className="stat-value">UV 5</span>
        </div>
      </div>
      <div className="middle-panel">
        <div className="date-info">
          Monday, September 9
        </div>
      </div>
      <div className="zodiac-moon-panel">
        <div className="zodiac-info">
          <img src={VirgoIcon} alt="Virgo" className="zodiac-icon"/>
          <span className="zodiac-label">Virgo</span>
        </div>
        <div className="moon-info">
          <i className="wi wi-moon-waxing-cresent-5 waxing-crescent-icon"></i>
          <span className="moon-phase">Waxing Crescent</span>
        </div>
      </div>
      <div className="bottom-panel">
        <div className="selection-container">
          <div className="selection-bar highlighted"></div>
          <div className="selection-bar"></div>
          <div className="selection-bar"></div>
          <div className="selection-bar"></div>
          <div className="selection-bar"></div>
        </div>
        <div className="info-container">
          <div className="info-item highlighted">
            <div className="date">9/9</div>
            <i className="wi wi-day-sunny sunny-icon"></i>
            <div className="date-temp">78°</div>
          </div>
          <div className="info-item">
            <div className="date">9/10</div>
            <i className="wi wi-day-sunny-overcast cloudy-icon"></i>
            <div className="date-temp">81°</div>
          </div>
          <div className="info-item">
            <div className="date">9/11</div>
            <i className="wi wi-showers rainy-icon"></i>
            <div className="date-temp">82°</div>
          </div>
          <div className="info-item">
            <div className="date">9/12</div>
            <i className="wi wi-day-sunny sunny-icon"></i>
            <div className="date-temp">83°</div>
          </div>
          <div className="info-item">
            <div className="date">9/13</div>
            <i className="wi wi-day-sunny-overcast cloudy-icon"></i>
            <div className="date-temp">83°</div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;

import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import VirgoIcon from "./Virgo.svg";

function App() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  const renderContent = () => {
    switch (selectedButton) {
      case 1:
        return (
    <>
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
          <div 
            className={"selection-bar highlighted"}
            onClick={() => handleButtonClick(1)}
          >
          </div>
          <div 
            className="selection-bar"
            onClick={() => handleButtonClick(2)}
          >
          </div>
          <div 
            className="selection-bar"
            onClick={() => handleButtonClick(3)}
          >
          </div>
          <div 
            className="selection-bar"
            onClick={() => handleButtonClick(4)}
          >
          </div>
          <div 
            className="selection-bar"
            onClick={() => handleButtonClick(5)}
          >
          </div>
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
    </>
    );
      case 2:
        return (
          <>
          <div className="sun-icon">
            <i className="wi wi-day-sunny-overcast cloudy"></i>
          </div>
          <div className="weather-info">
            <div className="temperature">
              <span className="temp-value">81°F</span>
            </div>
            <div className="rain-info">
              <i className="wi wi-rain sun"></i>
              <span className="rain-chance">10%</span>
            </div>
          </div>
          <div className="stats-panel">
            <div className="stat-item">
              <i className="wi wi-strong-wind wind"></i>
              <span className="stat-value">15 MPH</span>
            </div>
            <div className="stat-item">
              <i className="wi wi-sprinkle humidity"></i> 
              <span className="stat-value">80%</span>
            </div>
            <div className="stat-item">
              <i className="wi wi-day-sunny sun-uv"></i>
              <span className="stat-value">UV 4</span>
            </div>
          </div>
          <div className="middle-panel">
            <div className="date-info">
              Tuesday, September 10
            </div>
          </div>
          <div className="zodiac-moon-panel">
            <div className="zodiac-info">
              <img src={VirgoIcon} alt="Virgo" className="zodiac-icon"/>
              <span className="zodiac-label">Virgo</span>
            </div>
            <div className="moon-info">
              <i className="wi wi-moon-waxing-cresent-6 waxing-crescent-icon"></i>
              <span className="moon-phase">Waxing Crescent</span>
            </div>
          </div>
          <div className="bottom-panel">
            <div className="selection-container">
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(1)}
              >
              </div>
              <div 
                className={"selection-bar highlighted"}
                onClick={() => handleButtonClick(2)}
              >
              </div>
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(3)}
              >
              </div>
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(4)}
              >
              </div>
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(5)}
              >
              </div>
            </div>
            <div className="info-container">
              <div className="info-item">
                <div className="date">9/9</div>
                <i className="wi wi-day-sunny sunny-icon"></i>
                <div className="date-temp">78°</div>
              </div>
              <div className="info-item highlighted">
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
        </>
        );
      case 3:
        return (
          <>
          <div className="sun-icon">
            <i className="wi wi-showers rainy"></i>
          </div>
          <div className="weather-info">
            <div className="temperature">
              <span className="temp-value">82°F</span>
            </div>
            <div className="rain-info">
              <i className="wi wi-rain sun"></i>
              <span className="rain-chance">80%</span>
            </div>
          </div>
          <div className="stats-panel">
            <div className="stat-item">
              <i className="wi wi-strong-wind wind"></i>
              <span className="stat-value">10 MPH</span>
            </div>
            <div className="stat-item">
              <i className="wi wi-sprinkle humidity"></i> 
              <span className="stat-value">90%</span>
            </div>
            <div className="stat-item">
              <i className="wi wi-day-sunny sun-uv"></i>
              <span className="stat-value">UV 2</span>
            </div>
          </div>
          <div className="middle-panel">
            <div className="date-info">
              Wednesday, September 11
            </div>
          </div>
          <div className="zodiac-moon-panel">
            <div className="zodiac-info">
              <img src={VirgoIcon} alt="Virgo" className="zodiac-icon"/>
              <span className="zodiac-label">Virgo</span>
            </div>
            <div className="moon-info">
              <i className="wi wi-moon-first-quarter waxing-crescent-icon"></i>
              <span className="moon-phase">First Quarter</span>
            </div>
          </div>
          <div className="bottom-panel">
            <div className="selection-container">
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(1)}
              >
              </div>
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(2)}
              >
              </div>
              <div 
                className={"selection-bar highlighted"}
                onClick={() => handleButtonClick(3)}
              >
              </div>
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(4)}
              >
              </div>
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(5)}
              >
              </div>
            </div>
            <div className="info-container">
              <div className="info-item">
                <div className="date">9/9</div>
                <i className="wi wi-day-sunny sunny-icon"></i>
                <div className="date-temp">78°</div>
              </div>
              <div className="info-item">
                <div className="date">9/10</div>
                <i className="wi wi-day-sunny-overcast cloudy-icon"></i>
                <div className="date-temp">81°</div>
              </div>
              <div className="info-item highlighted">
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
        </>
        );
      case 4:
        return (
          <>
          <div className="sun-icon">
            <i className="wi wi-day-sunny sun"></i>
          </div>
          <div className="weather-info">
            <div className="temperature">
              <span className="temp-value">83°F</span>
            </div>
            <div className="rain-info">
              <i className="wi wi-rain sun"></i>
              <span className="rain-chance">0%</span>
            </div>
          </div>
          <div className="stats-panel">
            <div className="stat-item">
              <i className="wi wi-strong-wind wind"></i>
              <span className="stat-value">11 MPH</span>
            </div>
            <div className="stat-item">
              <i className="wi wi-sprinkle humidity"></i> 
              <span className="stat-value">50%</span>
            </div>
            <div className="stat-item">
              <i className="wi wi-day-sunny sun-uv"></i>
              <span className="stat-value">UV 8</span>
            </div>
          </div>
          <div className="middle-panel">
            <div className="date-info">
              Thursday, September 12
            </div>
          </div>
          <div className="zodiac-moon-panel">
            <div className="zodiac-info">
              <img src={VirgoIcon} alt="Virgo" className="zodiac-icon"/>
              <span className="zodiac-label">Virgo</span>
            </div>
            <div className="moon-info">
              <i className="wi wi-moon-waxing-gibbous-1 waxing-crescent-icon"></i>
              <span className="moon-phase">Waxing Gibbous</span>
            </div>
          </div>
          <div className="bottom-panel">
            <div className="selection-container">
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(1)}
              >
              </div>
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(2)}
              >
              </div>
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(3)}
              >
              </div>
              <div 
                className={"selection-bar highlighted"}
                onClick={() => handleButtonClick(4)}
              >
              </div>
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(5)}
              >
              </div>
            </div>
            <div className="info-container">
              <div className="info-item">
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
              <div className="info-item highlighted">
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
        </>
        );
      case 5:
        return (
          <>
          <div className="sun-icon">
            <i className="wi wi-day-sunny-overcast cloudy"></i>
          </div>
          <div className="weather-info">
            <div className="temperature">
              <span className="temp-value">83°F</span>
            </div>
            <div className="rain-info">
              <i className="wi wi-rain sun"></i>
              <span className="rain-chance">10%</span>
            </div>
          </div>
          <div className="stats-panel">
            <div className="stat-item">
              <i className="wi wi-strong-wind wind"></i>
              <span className="stat-value">18 MPH</span>
            </div>
            <div className="stat-item">
              <i className="wi wi-sprinkle humidity"></i> 
              <span className="stat-value">60%</span>
            </div>
            <div className="stat-item">
              <i className="wi wi-day-sunny sun-uv"></i>
              <span className="stat-value">UV 6</span>
            </div>
          </div>
          <div className="middle-panel">
            <div className="date-info">
              Friday, September 13
            </div>
          </div>
          <div className="zodiac-moon-panel">
            <div className="zodiac-info">
              <img src={VirgoIcon} alt="Virgo" className="zodiac-icon"/>
              <span className="zodiac-label">Virgo</span>
            </div>
            <div className="moon-info">
              <i className="wi wi-moon-waxing-gibbous-2 waxing-crescent-icon"></i>
              <span className="moon-phase">Waxing Gibbous</span>
            </div>
          </div>
          <div className="bottom-panel">
            <div className="selection-container">
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(1)}
              >
              </div>
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(2)}
              >
              </div>
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(3)}
              >
              </div>
              <div 
                className="selection-bar"
                onClick={() => handleButtonClick(4)}
              >
              </div>
              <div 
                className={"selection-bar highlighted"}
                onClick={() => handleButtonClick(5)}
              >
              </div>
            </div>
            <div className="info-container">
              <div className="info-item">
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
              <div className="info-item highlighted">
                <div className="date">9/13</div>
                <i className="wi wi-day-sunny-overcast cloudy-icon"></i>
                <div className="date-temp">83°</div>
              </div>
            </div>
          </div>
        </>
        );
      default:
        return <div>Error - You're not supposed to be here.</div>;
    }
  };

  return (
    <div className="Vertical-app">
      {renderContent()}
    </div>
  );
}

export default App;

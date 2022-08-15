import React, { useState } from "react";
import cityImg from "../images/town-svgrepo-com.svg";

export default function HeaderData({
  headerData,
  getDataFromHeader,
  getWeather,
}) {
  const [isOpen, setIsOpen] = useState(false);
  // const [currentCity, setCurrentCity] = useState("")

 
  function toogleCityInput() {
    setIsOpen((prevstate) => !prevstate);
  }



  return (
    <div className="header">
      <div className="choose-city">
        {isOpen && (
          <input
            placeholder="Choose city"
            className="input"
            onChange={(e) => getDataFromHeader(e.target.value)} // <-- na kazdu zmenu sa pripise hodnota z inputu do CITY stateu / Tuto hodnotu je treba dostat z Header do App
            // <-- getweatehr funkcia ktora spusta fetch a nasladne pripise data do Stateu WEATEHRDATA / spusta sa na enter v inpute
            onKeyPress={getWeather}
            type="text"
          />
        )}
      </div>

      <button className="city-btn" onClick={toogleCityInput}>
        <img src={cityImg} className="city-img" alt="city" />
      </button>

      <div className="main-info">
        <h2 className="city">{headerData.location.name}</h2>
        <p className="current-day">{headerData.location.localtime}</p>  
        <h1 className="degrees">{headerData.current.temperature}°c</h1>
        <p className="temp-min-max">15°/30°{headerData.header}</p>
        <p className="temp-feel">Feels like {headerData.current.feelslike}°c</p>
      </div>
    </div>
  );
}

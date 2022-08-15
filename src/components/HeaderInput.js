import { React, useState } from "react";
import cityImg from "../images/town-svgrepo-com.svg";

export default function HeaderInput({ props, getDataFromHeader, getWeather }) {
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
    </div>
  );
}

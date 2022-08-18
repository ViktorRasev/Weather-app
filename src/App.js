import React, { useState } from "react";

import HeaderInput from "./components/HeaderInput";
import HeaderData from "./components/HeaderData";
import Forecast from "./components/Forecast";
import OtherInfo from "./components/Other-info";

function App() {
  // Weather api
  const apiKey = "eeb956c6b612ce40f2d1f58dc80386fb";
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState("");

  // const getDataFromHeader = (inputValues) => setCity(inputValues);

  function getDataFromHeader(inputValues) {
    return setCity(inputValues);
  }
  const getWeather = (e) => {
    if (e.key === "Enter") {
      fetch( 
      `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => setWeatherData([data]));
      setCity("");
    }
  };
  console.log(weatherData);
  console.log(city ? city : "Empty string");

  const headerComponent =
    weatherData &&
    weatherData.map((headerData, index) => {
      return (
        <HeaderData
          key={index}
          headerData={headerData}
          getDataFromHeader={getDataFromHeader} // city state data
          // cityValue={city} // hodnota z inputu pre vyber mesta
          getWeather={getWeather} // Na potvrdenei inputu Enterom fetchne data a nastavi weatherData state
        />
      );
    });

  const otherInfoComponent =
    weatherData &&
    weatherData.map((otherInfoData, index) => {
      return <OtherInfo key={index} otherInfo={otherInfoData} />;
    });
  return (
    <div className="container">
      {weatherData ? (
        headerComponent
      ) : (
        <HeaderInput
          getDataFromHeader={getDataFromHeader}
          getWeather={getWeather}
        />
      )}
      <Forecast />
      {otherInfoComponent}
    </div>
  );
}

export default App;

// WEather api
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=cd2684bf01cd591a18fdb9e99b0d54b8`

// Random api
// https://reqres.in/api/users?page=1

// http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}}
// SKUSKA
// const [hodnota, setHodnota] = useState(0)
// function passData(num) {
//   setHodnota((current) => {
//     return current + num
//   })
// }

// function inputFunkcia(hodnota) {
//   setHodnota(hodnota)
// }

// VYTVORIT FUNKCIU KTORA BUDE UPDATOVAT STATE CITY
// SKUSKA
// console.log(hodnota)
// console.log(randomInput)

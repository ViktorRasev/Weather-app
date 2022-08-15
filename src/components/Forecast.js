import React from "react";
import ForecastSilngleHour from "./Forecast-hour";

export default function Forecast({ props, passData, inputFunkcia }) {
  return (
    <div className="forecast">
      <ForecastSilngleHour time="11:00" temperature="26°" />
      <ForecastSilngleHour time="11:00" temperature="26°" />
      <ForecastSilngleHour time="11:00" temperature="26°" />
      <ForecastSilngleHour time="11:00" temperature="26°" />
    </div>
  );
}

// 15°

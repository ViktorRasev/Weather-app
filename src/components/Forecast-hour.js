import React from "react";

export default function ForecastSilngleHour(props) {
  return (
    <div className="forecastSingleHour">
      <p>{props.time}</p>
      <p>img</p>
      <p>{props.temperature}</p>
    </div>
  );
}

import React from "react";

export default function OtherInfo(props) {
  return (
    <div className="otherInfo">
      <span>Pressure = {props.otherInfo.current.pressure}</span>
      <span>Wind = {props.otherInfo.current.wind_degree}</span>
    </div>
  );
}

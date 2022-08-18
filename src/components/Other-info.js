import React from "react";

export default function OtherInfo(props) {
  return (
    <div className="otherInfo">
      <span>Pressure = {props.otherInfo.main.pressure}</span>
      <span>Wind = {props.otherInfo.wind.deg}</span>
    </div>
  );
}

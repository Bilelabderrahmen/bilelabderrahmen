import React from "react";
import "../Components/Stopwatch.css";

const Timer = ({ ms }) => {
  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;

  const hours = Math.floor(ms / msPerHour);
  const hoursRest = ms % msPerHour;
  const minutes = Math.floor(hoursRest / msPerMinute);
  const minutesRest = hoursRest % msPerMinute;
  const seconds = Math.floor(minutesRest / msPerSecond);

  return (
    <div className="time-container">
      <div className="time-digits">
        {" "}
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}{" "}
      </div>
      <div className="time-text">
        <div className="time-text-item"> Hours </div>
        <div className="time-text-item"> Minutes </div>
        <div className="time-text-item"> Seconds </div>
      </div>
    </div>
  );
};

export default Timer;

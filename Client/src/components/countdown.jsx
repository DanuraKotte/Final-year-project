import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Countdown = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [totalSeconds, setTotalSeconds] = useState(
    hours * 3600 + minutes * 60 + seconds,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (totalSeconds > 0) {
        setTotalSeconds((totalSeconds) => totalSeconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [totalSeconds]);

  const paddedHours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const paddedMinutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0",
  );
  const paddedSeconds = String(totalSeconds % 60).padStart(2, "0");

  return (
    <div className="d-flex justify-content-center align-items-center py-3">
      <div className="d-flex align-items-center bg-dark text-light rounded p-2">
        <div className="display-2">
          {paddedHours}:{paddedMinutes}:{paddedSeconds}
          <div className="d-flex px-2 rounded gap-5 bg-success">
            <h6 className="">Hours</h6>
            <h6 className="">Minutes</h6>
            <h6 className="">Second</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

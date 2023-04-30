import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CountdownTimer = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState(
    calculateRemainingTime(targetDate),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateRemainingTime(targetDate) {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const remainingTime = target - now;

    if (remainingTime >= 24 * 60 * 60 * 1000) {
      const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
      return {
        days: days + " days",
        hours: "",
        minutes: "",
        seconds: "",
      };
    }

    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60),
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return {
      days: "",
      hours: hours < 10 ? "0" + hours : hours,
      minutes: minutes < 10 ? "0" + minutes : minutes,
      seconds: seconds < 10 ? "0" + seconds : seconds,
    };
  }

  return (
    <div className="py-5">
      {remainingTime.days ? (
        <h2>{remainingTime.days} left</h2>
      ) : (
        <h1>
          {remainingTime.hours}:{remainingTime.minutes}:{remainingTime.seconds}{" "}
          <br />
          <span className="fs-5 ps-3 fw-normal">Remaining </span>
        </h1>
      )}
    </div>
  );
};

export default CountdownTimer;

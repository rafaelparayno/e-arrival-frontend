import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import classes from "./CurrentDate.module.css";

const CurrentDateTick = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      let dateTime = format(new Date(), "MMMM dd ,yyyy - HH:mm:ss aa ");
      setCurrentTime(dateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentTime]);

  return <div className={classes.timer}>{currentTime}</div>;
};

export default CurrentDateTick;

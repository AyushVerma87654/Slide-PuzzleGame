import React, { FC, useEffect, useState } from "react";
import Button from "./Button";

type TimeProps = { stop: boolean | undefined; start: boolean };

const Time: FC<TimeProps> = ({ stop, start }) => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  const changeTime = (timer: number) => {
    if (timer > 59) {
      timer -= 60;
      setSec(timer);
      setMin(min + 1);
    } else if (min > 59) {
      const m = min - 60;
      setMin(m);
      setHour(hour + 1);
    }
  };

  useEffect(() => {
    changeTime(sec);
  }, [sec]);

  useEffect(() => {
    if (start == true) {
      const timeout = setInterval(() => setSec((sec) => sec + 1), 1 * 1000);
      return () => clearInterval(timeout);
    }
    if (stop == false) {
      setHour(0);
      setMin(0);
      setSec(0);
    }
  }, [start, stop]);

  return (
    <div className="rounded-md flex items-center justify-center text-blue-700 text-2xl font-extrabold bg-red-500 h-12 w-40">
      <span>0{hour}:</span>
      {min >= 10 && <span>{min}:</span>}
      {min < 10 && <span>0{min}:</span>}
      {sec >= 10 && <span>{sec}</span>}
      {sec < 10 && <span>0{sec}</span>}
    </div>
  );
};

export default Time;

// odd
//

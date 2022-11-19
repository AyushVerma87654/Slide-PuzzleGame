import React, { FC, useEffect, useState } from "react";
import Button from "./Button";
import DisplayPuzzle from "./DisplayPuzzle";
import Result from "./Result";
import Time from "./Time";
import { cal, calculate, check, numbers } from "./utility/puzzle3";

type Puzzle3Props = {};

const Puzzle3: FC<Puzzle3Props> = () => {
  const output = [1, 2, 3, 4, 5, 6, 7, 8, ""];
  const [totalNumbers, setTotalNumbers] = useState<(string | number)[]>(
    numbers()
  );
  const [timeStart, setTimeStart] = useState(false);
  const [result, setResult] = useState(false);

  const handleButtonClick = (num: number) => {
    setTimeStart(true);
    if (!result) {
      let index = 0;
      let newarray = [...totalNumbers];
      for (let i = 0; i < newarray.length; i++) {
        if (newarray[i] == "") {
          index = i;
        }
      }
      const swap = calculate(num, index);
      cal(num, index, totalNumbers, setTotalNumbers);
      if (swap) {
        const t = newarray[num];
        newarray[num] = newarray[index];
        newarray[index] = t;
        setTotalNumbers(newarray);
      }
    }
  };

  const handleReloadClick = () => {
    setResult(false);
    setTotalNumbers(numbers());
    setTimeStart(false);
  };

  useEffect(() => {
    let token = 1;
    for (let i = 0; i < totalNumbers.length; i++) {
      if (totalNumbers[i] != output[i]) {
        token = 0;
      }
    }
    if (token == 1) {
      setResult(true);
      setTimeStart(false);
    }
  }, [totalNumbers]);

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="h-28 mt-4 space-y-2 gap-4 flex items-center justify-center">
        <div className="h-10 w-28">
          <Button onClick={handleReloadClick} type="button">
            Reload
          </Button>
        </div>
        <Time stop={result} start={timeStart} />
      </div>
      {result && <Result />}
      {!result && (
        <div className="grid grid-cols-3 gap-3">
          {totalNumbers.map((item, index) => (
            <DisplayPuzzle
              key={item}
              number={item}
              index={index}
              handleButtonClick={handleButtonClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Puzzle3;

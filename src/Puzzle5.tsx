import { range } from "lodash";
import React, { FC, useEffect, useState } from "react";
import Button from "./Button";
import DisplayPuzzle from "./DisplayPuzzle";
import Result from "./Result";
import Time from "./Time";
// import { cal5, calculate5, numbers5 } from "./utility/puzzle5";
import { adjacent, movement, numbers } from "./utility/utility";

type Puzzle5Props = {};

const Puzzle5: FC<Puzzle5Props> = () => {
  const which = 5;
  const output = range(1, which * which);
  const [totalNumbers, setTotalNumbers] = useState<(string | number)[]>(
    numbers(which)
  );
  const [result, setResult] = useState(false);
  const [timeStart, setTimeStart] = useState(false);

  const handleButtonClick = (num: number) => {
    setTimeStart(true);
    if (!result) {
      let string = 0;
      let newarray = [...totalNumbers];
      for (let i = 0; i < newarray.length; i++) {
        if (newarray[i] == "") {
          string = i;
        }
      }
      // const swap = calculate5(num, string);
      const swap = adjacent(num, string, which);
      // cal3(num, index, totalNumbers, setTotalNumbers);
      // cal5(num, string, totalNumbers, setTotalNumbers);
      movement(num, string, totalNumbers, setTotalNumbers, which);
      if (swap) {
        const t = newarray[num];
        newarray[num] = newarray[string];
        newarray[string] = t;
        setTotalNumbers(newarray);
      }
    }
  };

  const handleReloadClick = () => {
    setResult(false);
    setTimeStart(false);
    setTotalNumbers(numbers(which));
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
    <div className="flex flex-col items-center justify-center">
      <div className="h-20 mt-2 flex flex-col items-center justify-center">
        <div className="flex gap-4">
          <Button onClick={handleReloadClick} type="button">
            Reload
          </Button>
          <Time stop={result} start={timeStart} />
        </div>
      </div>
      {result && <Result />}
      {!result && (
        <div>
          <div className="grid grid-cols-5 gap-3">
            {totalNumbers.map((item, index) => (
              <DisplayPuzzle
                key={item}
                number={item}
                index={index}
                handleButtonClick={handleButtonClick}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Puzzle5;

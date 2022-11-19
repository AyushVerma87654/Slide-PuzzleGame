import React, { FC, useEffect, useState } from "react";
import Button from "./Button";
import DisplayPuzzle from "./DisplayPuzzle";
import Result from "./Result";
import Time from "./Time";
import { cal3, calculate5, check, numbers5 } from "./utility/puzzle5";

type Puzzle5Props = {};

const Puzzle5: FC<Puzzle5Props> = () => {
  // const resul = check(a);
  // console.log("result", resul);
  const output = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    "",
  ];
  const [totalNumbers, setTotalNumbers] = useState<(string | number)[]>(
    numbers5()
  );
  const [result, setResult] = useState(false);
  const [timeStart, setTimeStart] = useState(false);

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
      const swap = calculate5(num, index);
      cal3(num, index, totalNumbers, setTotalNumbers);
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
    setTimeStart(false);
    setTotalNumbers(numbers5());
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

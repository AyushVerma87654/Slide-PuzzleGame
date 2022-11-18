import React, { FC, useEffect, useState } from "react";
import Button from "./Button";
import DisplayPuzzle from "./DisplayPuzzle";
import Result from "./Result";
import Time from "./Time";
import { cal3, calculate5, numbers5 } from "./utility/puzzle5";

type Puzzle5Props = {};

const Puzzle5: FC<Puzzle5Props> = () => {
  const a = numbers5();
  const output1 = [
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
  const output2 = [
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
    24,
    23,
    22,
    "",
  ];
  const [totalNumbers, setTotalNumbers] = useState(a);
  const [result, setResult] = useState(false);
  const [timeStart, setTimeStart] = useState(false);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (totalNumbers.length != 0 && a.length != 0) {
      let token = 0;
      for (let i = 0; i < totalNumbers.length; i++) {
        if (totalNumbers[i] == a[i]) {
          token += 1;
        }
      }
      if (token != 9) {
        setResult(false);
      }
    }
  }, [totalNumbers, result == undefined]);

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
    setReverse(false);
    setTimeStart(false);
    setTotalNumbers(numbers5());
  };

  useEffect(() => {
    let token = 1;
    for (let i = 0; i < 21; i++) {
      if (totalNumbers[i] != output1[i]) {
        token = 0;
      }
    }
    if (token == 1) {
      const a = totalNumbers.slice(21, 24);
      const x = a.toString();
      if (x == "22,24,23" || x == "23,22,24") {
        setReverse(true);
      }
    }
  }, [totalNumbers]);

  useEffect(() => {
    let token = 1;
    for (let i = 0; i < totalNumbers.length; i++) {
      if (totalNumbers[i] != output1[i]) {
        if (totalNumbers[i] != output2[i]) {
          token = 0;
        }
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
        {reverse && !result && (
          <div className="p-2">
            <div className="text-fuchsia-700 font-bold p-1">
              Solve the last as 21 24 23 22
            </div>
          </div>
        )}
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

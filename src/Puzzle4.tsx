import React, { FC, useEffect, useState } from "react";
import Button from "./Button";
import DisplayPuzzle from "./DisplayPuzzle";
import Result from "./Result";
import { cal3, calculate2, numbers2 } from "./utility/puzzle4";

type Puzzle4Props = {};

const Puzzle4: FC<Puzzle4Props> = () => {
  const a = numbers2();
  const output1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""];
  const output2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 14, 13, ""];
  const [totalNumbers, setTotalNumbers] = useState(a);
  const [result, setResult] = useState(false);
  const [reverse, setReverse] = useState(false);

  const handleButtonClick = (num: number) => {
    if (!result) {
      let index = 0;
      let newarray = [...totalNumbers];
      for (let i = 0; i < newarray.length; i++) {
        if (newarray[i] == "") {
          index = i;
        }
      }
      const swap = calculate2(num, index);
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
    setTotalNumbers(numbers2());
  };

  useEffect(() => {
    let token = 1;
    for (let i = 0; i < 12; i++) {
      if (totalNumbers[i] != output1[i]) {
        token = 0;
      }
    }
    if (token == 1) {
      const a = totalNumbers.slice(12, 15);
      const x = a.toString();
      if (x == "13,15,14" || x == "14,13,15") {
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
    }
  }, [totalNumbers]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-20 mt-5 flex flex-col items-center justify-center">
        <div className="h-10 w-40">
          <Button onClick={handleReloadClick} type="button">
            Reload
          </Button>
        </div>
        {reverse && !result && (
          <div className="p-2">
            <div className="text-fuchsia-700 font-bold p-1">
              Solve the last as 15 14 13
            </div>
          </div>
        )}
      </div>
      {result && <Result />}
      {!result && (
        <div className="mt-2">
          <div className="grid grid-cols-4 gap-3">
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

export default Puzzle4;

import React, { FC, useEffect, useState } from "react";
import Button from "./Button";
import DisplayPuzzle from "./DisplayPuzzle";
import { cal, calculate, numbers } from "./utility";

type PuzzleProps = {};

const Puzzle: FC<PuzzleProps> = () => {
  const a = numbers();
  console.log(a);
  const output = [1, 2, 3, 4, 5, 6, 7, 8, ""];
  const [totalNumbers, setTotalNumbers] = useState(a);
  const [result, setResult] = useState(false);

  const handleButtonClick = (num: number) => {
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

  useEffect(() => {
    let token = 1;
    for (let i = 0; i < totalNumbers.length; i++) {
      if (totalNumbers[i] != output[i]) {
        token = 0;
      }
    }
    if (token == 1) {
      setResult(true);
    }
  }, [totalNumbers]);
  console.log(result);

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="h-28 mt-4">
        {result && (
          <div className="text-xl px-8 py-4 bg-green-500 text-fuchsia-700 font-bold">
            You have solved the puzzle
          </div>
        )}
        {!result && <div></div>}
      </div>
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
    </div>
  );
};

export default Puzzle;

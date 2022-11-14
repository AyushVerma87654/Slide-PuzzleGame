import React, { FC, useEffect, useState } from "react";
import Button from "./Button";
import DisplayPuzzle from "./DisplayPuzzle";

type PuzzleProps = {};

const Puzzle: FC<PuzzleProps> = () => {
  const a = [3, 5, 8, 7, 6, 2, 1, 4, ""];
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
      if (swap) {
        const t = newarray[num];
        newarray[num] = newarray[index];
        newarray[index] = t;
        setTotalNumbers(newarray);
      }
    }
  };

  const calculate = (num: number, string: number) => {
    if (num == 0 || num == 3 || num == 6) {
      if (string == num + 1 || string == num - 3 || string == num + 3) {
        return true;
      }
    }
    if (num == 1 || num == 4 || num == 7) {
      if (
        string == num - 1 ||
        string == num + 1 ||
        string == num - 3 ||
        string == num + 3
      ) {
        return true;
      }
    }
    if (num == 2 || num == 5 || num == 8) {
      if (string == num - 1 || string == num - 3 || string == num + 3) {
        return true;
      }
    }

    return false;
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

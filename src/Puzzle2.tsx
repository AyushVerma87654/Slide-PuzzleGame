import React, { FC, useEffect, useState } from "react";
import DisplayPuzzle from "./DisplayPuzzle";
import { cal2, calculate2, numbers2 } from "./utility";

type Puzzle2Props = {};

const Puzzle2: FC<Puzzle2Props> = () => {
  const a = numbers2();
  const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""];
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
      console.log("index", index);
      console.log("num", num);
      const swap = calculate2(num, index);
      console.log("swap", swap);
      cal2(num, index, totalNumbers, setTotalNumbers);
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
    <div className="flex flex-col items-center justify-center">
      <div className="h-20 mt-5">
        {result && (
          <div className="text-xl px-8 py-4 bg-green-500 text-fuchsia-700 font-bold">
            You have solved the puzzle
          </div>
        )}
        {!result && <div></div>}
      </div>
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
    </div>
  );
};

export default Puzzle2;

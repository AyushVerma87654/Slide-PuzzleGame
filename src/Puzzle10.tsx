import React, { FC, useEffect, useState } from "react";
import Button from "./Button";
import DisplayPuzzle from "./DisplayPuzzle";
import Result from "./Result";
import Time from "./Time";
// import { cal5, calculate5, numbers5 } from "./utility/puzzle5";
import { adjacent, movement, numbers } from "./utility/utility";

type Puzzle11Props = {};

const Puzzle11: FC<Puzzle11Props> = () => {
  const which = 10;
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
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    28,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    "",
  ];
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
      <div className="m-2 flex flex-col items-center justify-center">
        <div className="flex gap-4">
          <Button onClick={handleReloadClick} type="submit">
            Reload
          </Button>
          <Time stop={result} start={timeStart} value={11} />
        </div>
      </div>
      {result && <Result />}
      {!result && (
        <div className="px-2 pt-1">
          <div className="grid grid-cols-10 gap-1 mb-2">
            {totalNumbers.map((item, index) => (
              <DisplayPuzzle
                hi={11}
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

export default Puzzle11;
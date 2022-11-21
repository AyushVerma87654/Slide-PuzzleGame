import React, { Children, FC } from "react";
import Button from "./Button";
import Button2 from "./Button2";

type DisplayPuzzleProps = {
  number: string | number;
  index: number;
  handleButtonClick: (a: number) => void;
  hi?: number;
};

const DisplayPuzzle: FC<DisplayPuzzleProps> = ({
  number,
  handleButtonClick,
  index,
  hi,
}) => {
  return (
    <div>
      {hi == 11 && (
        <Button2
          onClick={() => {
            handleButtonClick(index);
          }}
        >
          {number}
        </Button2>
      )}
      {!hi && (
        <Button
          onClick={() => {
            handleButtonClick(index);
          }}
        >
          {number}
        </Button>
      )}
    </div>
  );
};

export default DisplayPuzzle;

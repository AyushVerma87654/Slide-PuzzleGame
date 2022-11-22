import React, { FC } from "react";
import Button from "./Button";

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
      {hi == 8 && (
        <Button
          className="8"
          onClick={() => {
            handleButtonClick(index);
          }}
        >
          {number}
        </Button>
      )}
      {hi == 12 && (
        <Button
          className="12"
          onClick={() => {
            handleButtonClick(index);
          }}
        >
          {number}
        </Button>
      )}
      {hi == 9 && (
        <Button
          className="9"
          onClick={() => {
            handleButtonClick(index);
          }}
        >
          {number}
        </Button>
      )}
      {hi == 11 && (
        <Button
          className="11"
          onClick={() => {
            handleButtonClick(index);
          }}
        >
          {number}
        </Button>
      )}
      {hi == 10 && (
        <Button
          className="10"
          onClick={() => {
            handleButtonClick(index);
          }}
        >
          {number}
        </Button>
      )}
      {hi == 6 && (
        <Button
          type="button"
          onClick={() => {
            handleButtonClick(index);
          }}
        >
          {number}
        </Button>
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

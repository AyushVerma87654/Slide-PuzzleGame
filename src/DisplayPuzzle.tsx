import React, { FC } from "react";
import Button from "./Button";

type DisplayPuzzleProps = {
  number: string | number;
  index: number;
  handleButtonClick: (a: number) => void;
};

const DisplayPuzzle: FC<DisplayPuzzleProps> = ({
  number,
  handleButtonClick,
  index,
}) => {
  return (
    <Button
      onClick={() => {
        handleButtonClick(index);
      }}
    >
      {number}
    </Button>
  );
};

export default DisplayPuzzle;

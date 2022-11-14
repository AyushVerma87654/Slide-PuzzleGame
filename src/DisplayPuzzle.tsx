import React, { Children, FC } from "react";
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
  let bg = "";
  if (number == "") {
    bg = "bg-white";
  }
  return (
    <Button
      onClick={() => {
        handleButtonClick(index);
        const className = bg;
      }}
    >
      {number}
    </Button>
  );
};

export default DisplayPuzzle;

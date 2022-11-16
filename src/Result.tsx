import React, { FC } from "react";

type ResultProps = {};

const Result: FC<ResultProps> = () => {
  return (
    <div>
      <div className="text-xl px-8 py-4 mt-6 bg-green-500 text-fuchsia-700 font-bold">
        You have solved the puzzle
      </div>
    </div>
  );
};

export default Result;

import React, { FC } from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";

type MainPageProps = {};

const MainPage: FC<MainPageProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 gap-20">
      <Link to="/puzzle">
        <Heading className="bg-green-500 rounded-md w-20">3 X 3</Heading>
      </Link>
      <Link to="/puzzle2">
        <Heading className="bg-green-500 rounded-md w-20">4 X 4</Heading>
      </Link>
    </div>
  );
};

export default MainPage;

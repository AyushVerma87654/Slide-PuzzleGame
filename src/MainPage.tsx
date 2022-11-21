import React, { FC } from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";

type MainPageProps = {};

const MainPage: FC<MainPageProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center m-6 gap-10">
      <Link to="/puzzle3">
        <Heading className="bg-green-500 rounded-md w-20">3 X 3</Heading>
      </Link>
      <Link to="/puzzle4">
        <Heading className="bg-green-500 rounded-md w-20">4 X 4</Heading>
      </Link>
      <Link to="/puzzle5">
        <Heading className="bg-green-500 rounded-md w-20">5 X 5</Heading>
      </Link>
      <Link to="/puzzle11">
        <Heading className="bg-green-500 rounded-md w-20">11 X 11</Heading>
      </Link>
    </div>
  );
};

export default MainPage;

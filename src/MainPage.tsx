import React, { FC } from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";

type MainPageProps = {};

const MainPage: FC<MainPageProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center m-12 gap-8">
      <div className="flex gap-10">
        <Link to="/puzzle3">
          <Heading className="bg-green-500 text-yellow-400 rounded-md w-20">
            3 X 3
          </Heading>
        </Link>
        <Link to="/puzzle4">
          <Heading className="bg-green-500 text-yellow-400 rounded-md w-20">
            4 X 4
          </Heading>
        </Link>
        <Link to="/puzzle5">
          <Heading className="bg-green-500 text-yellow-400 rounded-md w-20">
            5 X 5
          </Heading>
        </Link>
      </div>
      <div className="flex gap-10">
        <Link to="/puzzle6">
          <Heading className="bg-yellow-500 text-fuchsia-700 rounded-md w-20">
            6 X 6
          </Heading>
        </Link>
        <Link to="/puzzle7">
          <Heading className="bg-yellow-500 text-fuchsia-700 rounded-md w-20">
            7 X 7
          </Heading>
        </Link>
        <Link to="/puzzle8">
          <Heading className="bg-yellow-500 text-fuchsia-700 rounded-md w-20">
            8 X 8
          </Heading>
        </Link>
      </div>
      <div className="flex gap-10">
        <Link to="/puzzle9">
          <Heading className="bg-fuchsia-500 text-black rounded-md w-20">
            9 X 9
          </Heading>
        </Link>
        <Link to="/puzzle10">
          <Heading className="bg-fuchsia-500 text-black rounded-md w-20">
            10 X 10
          </Heading>
        </Link>
        <Link to="/puzzle11">
          <Heading className="bg-fuchsia-500 text-black rounded-md w-20">
            11 X 11
          </Heading>
        </Link>
      </div>
      <Link to="/puzzle12">
        <Heading className="bg-black text-red-500 rounded-md w-40 text-3xl mt-4">
          12 X 12
        </Heading>
      </Link>
    </div>
  );
};

export default MainPage;

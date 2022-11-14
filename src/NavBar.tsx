import React, { FC } from "react";
import Heading from "./Heading";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = () => {
  return (
    <div className=" h-24 w-full">
      <Heading className="bg-black text-3xl w-full h-full text-blue-500">
        Welcome to my Puzzle Game...
      </Heading>
    </div>
  );
};

export default NavBar;

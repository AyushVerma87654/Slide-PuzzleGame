import React, { FC } from "react";
import Heading from "./Heading";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = () => {
  return (
    <div className="">
      <Heading className="bg-black text-xl text-blue-500 py-6">
        Welcome to my Puzzle Game...
      </Heading>
    </div>
  );
};

export default NavBar;

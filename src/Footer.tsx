import React, { FC } from "react";
import Heading from "./Heading";

const Footer = () => {
  return (
    <div className="fixed bottom-0 h-24 w-full">
      <Heading className="h-full text-blue-500 bg-black text-xl">
        Powered & Created By Ayush
      </Heading>
    </div>
  );
};

export default Footer;

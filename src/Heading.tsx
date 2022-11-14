import React, { FC } from "react";

type HeadingProps = { children: string; className?: string };

const Heading: FC<HeadingProps> = ({ children, className }) => {
  return (
    <div
      className={
        "font-bold flex items-center justify-center text-red-500 p-2 " +
        className
      }
    >
      {children}
    </div>
  );
};

export default Heading;

import React, { FC } from "react";

type HeadingProps = { children: string; className?: string };

const Heading: FC<HeadingProps> = ({ children, className }) => {
  return (
    <div className={"font-bold text-center p-2 " + className}>{children}</div>
  );
};

export default Heading;

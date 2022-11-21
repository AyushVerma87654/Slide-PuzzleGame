import React, { ButtonHTMLAttributes, FC } from "react";

type Button2Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button2: FC<Button2Props> = ({ onClick, children, className, type }) => {
  let bg = "bg-red-500";
  if (children == "") {
    bg = "bg-white";
  }
  // let width = "w-12";
  // if (type == "button") {
  //   width = "w-28";
  // } else if (type == "submit") {
  //   width = "w-6 h-12";
  // }
  return (
    <div className={"h-7 w-7 "}>
      <button
        className={
          "w-full h-full rounded-md text-blue-700 text-sm font-bold " + bg
        }
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default Button2;

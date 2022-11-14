import React, { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ onClick, children, className, type }) => {
  let bg = "";
  if (children == "") {
    bg = "bg-white";
  }
  return (
    <div className="h-12 w-12">
      <button
        className={
          "w-full h-full rounded-md text-blue-700 bg-red-500 text-2xl font-extrabold " +
          className +
          " " +
          bg
        }
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

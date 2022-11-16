import React, { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ onClick, children, className, type }) => {
  let bg = "bg-red-500";
  if (children == "") {
    bg = "bg-white";
  }
  let width = "w-12";
  if (type == "button") {
    width = "w-40";
  }
  return (
    <div className={"h-12 " + width}>
      <button
        className={
          "w-full h-full rounded-md text-blue-700 text-2xl font-extrabold " + bg
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

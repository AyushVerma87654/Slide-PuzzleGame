import React, { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ onClick, children, className, type }) => {
  let bg = "bg-red-500";
  if (children == "") {
    bg = "bg-white";
  }
  let upper = "w-12 h-12";
  let down = "text-2xl";
  if (type == "button") {
    upper = "w-28 h-12";
  } else if (type == "submit") {
    upper = "w-28 h-10";
  }
  if (className == "11") {
    down = "text-sm";
    upper = "w-7 h-7";
  } else if (className == "10") {
    down = "text-sm";
    upper = "w-7 h-7";
  } else if (className == "12") {
    down = "text-sm";
    upper = "w-7 h-6";
  } else if (className == "8") {
    down = "text-lg";
    upper = "w-10 h-10";
  } else if (className == "9") {
    down = "text-lg";
    upper = "w-9 h-9";
  }
  return (
    <div className={upper}>
      <button
        className={
          "w-full h-full rounded-md text-blue-700 font-extrabold " +
          bg +
          " " +
          down
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

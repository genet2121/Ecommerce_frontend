import React from "react";

interface ButtonProps {
  text: string;
  isPrimary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, isPrimary }) => {
  return (
    <div
      className={`justify-center self-stretch px-16 my-auto text-sm font-medium leading-9 ${
        isPrimary ? "text-white bg-purple-900" : "text-purple-900 bg-white border border-purple-900"
      } rounded-md border border-solid shadow-sm max-md:pr-6 max-md:pl-5`}
    >
      <button>{text}</button>
    </div>
  );
};

export default Button;

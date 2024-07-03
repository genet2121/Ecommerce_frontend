import React from "react";

interface DropdownButtonProps {
  imgSrc: string;
  text: string;
  toggleDropdown: () => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ imgSrc, text, toggleDropdown }) => {
  return (
    <div
      className="flex gap-2 items-center self-stretch px-8 py-1 my-auto text-sm font-medium leading-9 text-purple-900 bg-white rounded-md border border-gray-200 border-solid shadow-sm"
      onClick={toggleDropdown}
    >
      <img
        loading="lazy"
        alt="Icon"
        src={imgSrc}
        className="shrink-0 self-start w-3.5 aspect-[0.4]"
      />
      <div className="self-stretch my-auto">{text}</div>
      <img
        loading="lazy"
        alt="Dropdown Icon"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e9405fa91018876051cb6b1ce77af9ca22c7fbecdc090f071d9e017ad26b363?"
        className="shrink-0 self-stretch my-auto w-3.5 aspect-square"
      />
    </div>
  );
};

export default DropdownButton;

import React, { useState } from 'react';
import DropdownButton from '../shared/DropdownButton';
import Button from '../shared/SharedButton';

const SearchCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="flex gap-5 justify-between items-center px-5 max-md:flex-wrap mb-8">
      <DropdownButton
        imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9d1dc787288ea048f1a6e945f83259867ff1613001855cd9e2dcbe96bd2167a1?"
        text="English - ETB"
        toggleDropdown={toggleDropdown}
      />
      <DropdownButton
        imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fefb3f1701cb2ed14042fce9f5b3ce0425782445d12ceebbe75b1d4a07f9f637?"
        text="Your Location"
        toggleDropdown={toggleDropdown}
      />
      <div
        className="flex gap-5 items-center self-stretch py-2 pr-5 pl-5 bg-white rounded-2xl border border-purple-900 border-solid max-md:flex-wrap max-md:pr-5 max-md:max-w-full"
        style={{ width: '800px' }}
      >
        <div
          className="flex gap-4 justify-end self-stretch px-10 py-0.5 bg-white rounded-0.5xl max-md:px-5"
          onClick={toggleDropdown}
        >
          <div className="flex-auto text-lg font-base leading-[50px] text-slate-700">
            All Categories
          </div>
          <div className="flex gap-1 items-center ">
            <img
              loading="lazy"
              alt="question"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/761c9efb58c2d587d9d8291d5908f681c7dd4aee38ef43cdcd365d8c4310d911?"
              className="shrink-0 aspect-square w-[20px]"
            />
          </div>
        </div>
        <div className="flex-auto self-stretch my-auto text-[16px] text-purple-900">
          Search for items...
        </div>
        <img
          loading="lazy"
          alt="search"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/850ef09980984a918dd5c17702be6da778efeae2b9473e11b47e3811d7b79ad9?"
          className="shrink-0 self-stretch my-auto aspect-square w-[25px]"
        />
      </div>
      <Button text="Sign in" />
      <Button text="Sign up" isPrimary />
    </div>
  );
};

export default SearchCategory;

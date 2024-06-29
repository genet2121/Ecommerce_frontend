

import React from 'react';

const SearchCategory = () => {
  return (
    <div className="flex gap-5 justify-between items-center px-5 max-md:flex-wrap">
      <div className="flex gap-4 self-stretch my-auto text-sm font-medium leading-9 text-purple-900 bg-white rounded-md border border-gray-200 border-solid shadow-sm">
        <div className="flex gap-1.5">
          <img
            loading="lazy" alt='birr'
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d1dc787288ea048f1a6e945f83259867ff1613001855cd9e2dcbe96bd2167a1?"
            className="shrink-0 aspect-square fill-black w-[15px]"
          />
          <div>English - ETB</div>
        </div>
        <img
          loading="lazy" alt='lo'
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/efe135265c4f0896e751c007da4c8f72295dad3831522998e42f00e052586251?"
          className="shrink-0 self-start w-3.5 aspect-square"
        />
      </div>
      <div className="flex gap-2 items-center self-stretch px-4 py-1 my-auto text-sm font-medium leading-9 text-purple-900 bg-white rounded-md border border-gray-200 border-solid shadow-sm">
        <img
          loading="lazy" alt='Location'
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fefb3f1701cb2ed14042fce9f5b3ce0425782445d12ceebbe75b1d4a07f9f637?"
          className="shrink-0 self-start w-3.5 aspect-[0.4]"
        />
        <div className="self-stretch my-auto">Your Location</div>
        <img
          loading="lazy" alt='hsh'
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e9405fa91018876051cb6b1ce77af9ca22c7fbecdc090f071d9e017ad26b363?"
          className="shrink-0 self-stretch my-auto w-3.5 aspect-square"
        />
      </div>
      <div className="flex gap-5 items-center self-stretch py-0.5 pr-7 pl-1 bg-white rounded-2xl border-2 border-purple-900 border-solid max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-4 justify-end self-stretch px-10 py-2 bg-white rounded-3xl max-md:px-5">
          <div className="flex-auto text-xl font-bold leading-[50px] text-slate-700">
            All Categories
          </div>
          <div className="flex gap-1 items-start self-start">
            <img
              loading="lazy" alt='question'
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/761c9efb58c2d587d9d8291d5908f681c7dd4aee38ef43cdcd365d8c4310d911?"
              className="shrink-0 aspect-square w-[25px]"
            />
            <div className="shrink-0 w-px h-5 bg-stone-300" />
          </div>
        </div>
        <div className="flex-auto self-stretch my-auto text-xl text-purple-900">
          Search for items...
        </div>
        <img
          loading="lazy" alt='yu'
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/850ef09980984a918dd5c17702be6da778efeae2b9473e11b47e3811d7b79ad9?"
          className="shrink-0 self-stretch my-auto aspect-square w-[25px]"
        />
      </div>
      <div className="justify-center self-stretch px-16  my-auto text-sm font-medium leading-9 text-purple-900 bg-white rounded-md border border-purple-900 border-solid shadow-sm max-md:pr-6 max-md:pl-5">
        Sign in
      </div>
      <div className="justify-center items-start self-stretch px-14  my-auto text-sm font-medium leading-9 text-white bg-purple-900 rounded-md border border-gray-200 border-solid shadow-sm max-md:px-5">
        Sign up
      </div>
    </div>

  );
};

export default SearchCategory;


  
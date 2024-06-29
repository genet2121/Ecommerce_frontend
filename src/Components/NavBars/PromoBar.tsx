

import React from 'react';

const PromoBar: React.FC = () => {
  return (
    <div className="w-full h-[34px] pt-1.5 pb-[7px] mb-9 bg-purple-800 border-b border-gray-300 justify-center items-end gap-[18px] inline-flex">
  <div className="text-white text-xs font-normal font-['Poppins'] leading-[21px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
  <div className="text-center text-white text-sm font-semibold font-['Poppins'] underline leading-normal">ShopNow</div>
</div>
  );
};

export default PromoBar;

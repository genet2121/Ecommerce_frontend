

import React from 'react';
import NavItem from '../../Components/shared/NavItem';

const Header = () => {
  return (
    <div className="w-full mb-20 mx-auto h-[63px] bg-white border-t border-b border-gray-200 flex items-center justify-between px-36">
      <div className="flex items-center">
        <img src="images/logo.jpg" alt="Logo" className="w-[69px] h-[51px] mr-3" />
        <div className="flex flex-col">
          <div className="text-zinc-800 text-base font-bold font-['Century Gothic']">Time</div>
          <div className="text-purple-900 text-lg font-normal font-['Questrial']">Technologies</div>
        </div>
      </div>
      <div className="flex items-center space-x-16"> 
        <NavItem to="/deals" label="Deals" iconSrc="images/deals.jpg" />
        <NavItem to="/" label="Home" />
        <NavItem to="/shop" label="Shop" />
        <NavItem to="/sellers" label="Sellers" />
        <NavItem to="/how-it-works" label="How it works" />
        <NavItem to="/about" label="About" />
        <NavItem to="/contact" label="Contact" />
      </div>
      <div className="flex flex-col items-start ml-10">
        <div className="flex items-center text-purple-900 text-[20px] font-bold leading-relaxed">
          <img src="images/support.jpg" alt="support" className="w-6 h-7 mr-2 self-center" />
          8100
        </div>
        <div className="text-zinc-500 text-xs font-medium font-['Lato'] leading-3 tracking-wide ml-8">
          24/7 Support Center
        </div>
      </div>
    </div>
  );
};

export default Header;

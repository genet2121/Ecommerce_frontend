import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  to: string;
  label: string;
  iconSrc?: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, iconSrc }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center text-base font-bold leading-[70px] ${isActive ? 'text-purple-900 underline' : 'text-slate-700'}`
      }
    >
      {iconSrc && <img src={iconSrc} alt={label} className="w-5 h-5 mr-1.5" />}
      {label}
    </NavLink>
  );
};

export default NavItem;

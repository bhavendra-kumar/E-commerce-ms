import React from 'react';
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='flex justify-evenly py-4 bg-gray-100 shadow-md'>
      <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>Home</NavLink>
      <NavLink to='/profile' className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>Profile</NavLink>
      <NavLink to='/wishlist' className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}><FaHeart /></NavLink>
      <NavLink to='/cart' className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}><FaCartArrowDown /></NavLink>
    </nav>
  );
};

export default Nav;


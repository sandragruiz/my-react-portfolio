import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  return (
  <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#9f1239] text-gray-300'>
    <div>
      Testing
    </div>
    
    {/* menu */}
    <div>
      <ul>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </div>

    {/* hamburger */}
    <div className='invisible'>
      <FaBars />
    </div>

    {/* mobile menu */}
    <ul className='invisible'>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Resume</li>
    </ul>

    {/* icons */}
    <div></div>
  </div>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
  <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#75132f] text-gray-300'>
    <div>
      {/* future development: add personalized logo */}
    </div>
    
    {/* menu */}
    <div>
      <ul className='hidden md:flex'>
        <li>
          <a href='#about'>About Me</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          Resume {/*future dev: add updated resume link*/}
        </li>
      </ul>
    </div>

    {/* hamburger */}
    <div onClick={handleClick} className='md:hidden z-10'>
      {!nav ? <FaBars /> : <FaTimes />}
    </div>

    {/* mobile menu */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#75132f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>About Me</li>
        <li className='py-6 text-4xl'>Portfolio</li>
        <li className='py-6 text-4xl'>Contact</li>
        <li className='py-6 text-4xl'>Resume</li>
    </ul>

  </div>
  );
};

export default Navbar;

'use client'

import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [MenuOpen, SetMenuOpen] = useState(false);

  // Detect screen size on component mount and window resize
  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 768; // Adjust breakpoint as needed
      SetMenuOpen(isLargeScreen);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const HandleMenuBtn = () => {
    SetMenuOpen(!MenuOpen);
  };

  return (
    <div>
      <nav className='max-[768px]:mb-[5rem]'>
        <label className='float-right pr-[3rem] max-[768px]:pr-[0rem] max-[768px]:mx-auto max-[768px]:flex  lg:hidden'>
          <button onClick={HandleMenuBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-[2rem] h-[5rem]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
            </svg>
          </button>
        </label>
        <img className='w-[4rem] mb-[-3rem]'  src="./Ebenezer.png" alt="" />

        {MenuOpen && (
          <ul className='float-right max-[768px]:float-none  mr-[20px] space-x-4 '>
            <li className=''>
              <a href="">About</a>
            </li>
            <li className=''>
              <a href="">Contact</a>
            </li>
            <li className=''>
              <a href="">Call</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

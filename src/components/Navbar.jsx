import React from 'react'


function Navbar() {
  return (
    <div className="flex bg-gradient-to-l from-[#FFEB85] to-[#E5BD0F] pt-4 justify-between items-center px-4  md:px-12 lg:px-20 sticky top-0 z-50">
      <h1 className="font-pacifico  px-4 text-3xl md:text:4xl lg:text-5xl md:font-bold">
        <span className="text-orange-700">Shikisha</span>-<span className='text-white md:text-6xl'>Juo</span>
      </h1>
      <ul className="hidden md:flex gap-4 md:gap-6">
        <li className="hover:text-white transition-colors duration-200 cursor-pointer hover:bg-orange-600 rounded-md p-1">
          <a href="#Home">Home</a>
        </li>
        <li className="hover:text-white transition-colors duration-200 cursor-pointer hover:bg-orange-600 rounded-md p-1">
          <a href="#Features">Features</a>
        </li>
        <li className="hover:text-white transition-colors duration-200 cursor-pointer hover:bg-orange-600 rounded-md p-1">
          <a href="#Menu">Menu</a>
        </li>
        <li className="hover:text-white transition-colors duration-200 cursor-pointer hover:bg-orange-600 rounded-md p-1">
          <a href="#Menu"> Pricing</a>
        </li>
        <li className="hover:text-white transition-colors duration-200 cursor-pointer hover:bg-orange-600 rounded-md p-1">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <button className="border border-black  hover:text-white transition-colors duration-200 cursor-pointer hover:bg-orange-600 rounded-md px-4 py-1">
        Sign Up
      </button>
    </div>
  );
}

export default Navbar
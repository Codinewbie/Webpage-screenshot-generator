import React, { useState } from 'react';
import { Link } from 'react-scroll';
import 'boxicons/css/boxicons.min.css';


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className = " sticky  top-0   z-[1000] bg-slate-800  border-b border-b-green-600">
    <nav className=" mx-4 ">
      <div className="flex items-center justify-between py-2 md:py-4">
      <Link to = "Home" smooth = {true} duration={500} className ="duration-300 font-bold z-[1] text-green-600 cursor-pointer">
      SnapTheWeb
          </Link>
        {/* <a className="text-xl text-green-600 font-bold z-[1]">SnapTheWeb</a> */}
        <button
          title="Open Menu"
          type="button"
          onClick={handleMenuToggle}
          className="text-2xl px-2 py-1 border border-neutral-200 rounded md:hidden z-[2]"
          id="menutoggler"
        >
          <i className="bx bx-menu"></i>
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-full mt-1 left-0 w-full bg-white md:bg-transparent text-center  md:relative md:flex md:w-auto md:items-center z-[1] md:z-auto`}
        >
        <ul className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8 py-6 md:py-0 w-full text-center">
        <li className="font-semibold top-full translate-y-0">
          <Link to = "Home" smooth = {true} duration={500} className ="duration-300 text-white hover:text-green-600 cursor-pointer">
            Home
          </Link>
          </li>
          <li className="font-semibold top-full translate-y-0">
            <a href = "https://codinewbie.github.io/portfolio/" className ="duration-300 text-white hover:text-green-600 cursor-pointer">
            Developer
          </a>
          </li>
          <li className="font-semibold top-full translate-y-0">
            <a href = "https://github.com/Codinewbie/Webpage-screenshot-generator" className ="duration-300 text-white hover:text-green-600 cursor-pointer">
            Source Code
          </a>
          </li>
          <li className="font-semibold top-full translate-y-0">
          
            <Link to = "Contact" smooth = {true} duration={500} className ="duration-300 text-white hover:text-green-600 cursor-pointer">
            Contact
          </Link>
          </li>
        </ul>
        </div>
      </div>
      
    </nav>
    </div>
  );
};

export default Header;




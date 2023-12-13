import React from 'react';
import logo from '../../assets/logo.png'
const Navbar = () => {
  const link = <>
          <a href="#banner"><li className='lg:ml-8 mb-4 lg:text-left text-center lg:text-white  lg:bg-black bg-blue-500 rounded-md py-1 lg:py-0  font-semibold text-lg'>Home</li></a>
          <a href="#about"> <li className='lg:ml-8 mb-4 lg:text-left text-center lg:text-white  lg:bg-black bg-blue-500 rounded-md py-1 lg:py-0  font-semibold text-lg'>About</li></a>
          <a href="#contact"><li className='lg:ml-8 mb-4 lg:text-left text-center lg:text-white  lg:bg-black bg-blue-500 rounded-md py-1 lg:py-0  font-semibold text-lg'>Contact</li></a>
          <a href="#project"><li className='lg:ml-8 mb-4 lg:text-left text-center lg:text-white  lg:bg-black bg-blue-500 rounded-md py-1 lg:py-0  font-semibold text-lg'>Project</li></a>
          <a href="#education"> <li className='lg:ml-8 mb-4 lg:text-left text-center lg:text-white  lg:bg-black bg-blue-500 rounded-md py-1 lg:py-0  font-semibold text-lg'>Education</li></a>
 
   </>
    return (
        <div className="navbar bg-black lg:px-16 px-5 fixed z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn lg:hidden text-black bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm cursor-pointer dropdown-content mt-3 p-3 bg-[#24273E] text-white rounded-lg w-[330px]">
               {link}
            </ul>
          </div>
          <img className='w-36 lg:block hidden' src={logo} alt="" srcset="" />
        </div>
        <div className='lg:hidden navbar-end'>
           <img className='w-36' src={logo} alt="" srcset="" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
      </div>
    );
};

export default Navbar;
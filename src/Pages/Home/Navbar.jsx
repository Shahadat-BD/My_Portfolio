import React from 'react';
import logo from '../../assets/logo.png'
import { FaRegAddressCard } from 'react-icons/fa';
const Navbar = () => {
  const link = <>
          <a href="#banner"><li className='lg:ml-5 lg:mb-0 mb-4 lg:text-left text-center lg:text-white  lg:bg-[#1A2739] bg-[#9D53E7] rounded-md py-1 lg:py-0  font-semibold text-lg'>Home</li></a>
          <a href="#about"> <li className='lg:ml-5 lg:mb-0 mb-4  lg:text-left text-center lg:text-white  lg:bg-[#1A2739] bg-[#9D53E7] rounded-md py-1 lg:py-0  font-semibold text-lg'>About</li></a>
          <a href="#skill
          "> <li className='lg:ml-5 lg:mb-0 mb-4  lg:text-left text-center lg:text-white  lg:bg-[#1A2739] bg-[#9D53E7] rounded-md py-1 lg:py-0  font-semibold text-lg'>Skill</li></a>
          <a href="#contact"><li className='lg:ml-5 lg:mb-0 mb-4  lg:text-left text-center lg:text-white  lg:bg-[#1A2739] bg-[#9D53E7] rounded-md py-1 lg:py-0  font-semibold text-lg'>Contact</li></a>
          <a href="#services"><li className='lg:ml-5 lg:mb-0 mb-4  lg:text-left text-center lg:text-white  lg:bg-[#1A2739] bg-[#9D53E7] rounded-md py-1 lg:py-0  font-semibold text-lg'>Services</li></a>
          <a href="#project"><li className='lg:ml-5 lg:mb-0 mb-4  lg:text-left text-center lg:text-white  lg:bg-[#1A2739] bg-[#9D53E7] rounded-md py-1 lg:py-0  font-semibold text-lg'>Project</li></a>
          <a href="#education"> <li className='lg:ml-5 lg:mb-0 mb-4  lg:text-left text-center lg:text-white  lg:bg-[#1A2739] bg-[#9D53E7] rounded-md py-1 lg:py-0  font-semibold text-lg'>Education</li></a>
        
   </>
    return (
        <div className="navbar bg-[#1A2739] lg:px-16 px-5 fixed z-20">
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <button className='hover:bg-[#f64765] hover:border-[#f64765] text-white border border-white  px-5 py-2 rounded-md font-bold'><a href="https://drive.google.com/file/d/1UEsuZdLKqQVek_10X_YZ-ea0VsFoZFbE/view?usp=sharing" target='https://drive.google.com/file/d/1UEsuZdLKqQVek_10X_YZ-ea0VsFoZFbE/view?usp=sharing' ><FaRegAddressCard className='float-left items-center text-xl mr-2'/> Resume</a></button>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;
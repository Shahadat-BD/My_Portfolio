import React from 'react';
import logo from '../../assets/logo.png'
const Navbar = () => {
  const link = <>
          <li className='ml-8 lg:text-white  font-semibold text-lg'>Home</li>
          <li className='ml-8 lg:text-white  font-semibold text-lg'>About</li>
          <li className='ml-8 lg:text-white  font-semibold text-lg'>Contact</li>
          <li className='ml-8 lg:text-white  font-semibold text-lg'>Project</li>
          <li className='ml-8 lg:text-white  font-semibold text-lg'>Education</li>
   </>
    return (
        <div className="navbar bg-black lg:px-16 px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               {link}
            </ul>
          </div>
           <img className='w-36' src={logo} alt="" srcset="" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        {/* <div className="navbar-end ">
          <a className="btn">Button</a>
        </div> */}
      </div>
    );
};

export default Navbar;
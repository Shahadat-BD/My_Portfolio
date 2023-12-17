import React from 'react';
import project_1 from '../../assets/images/BookStack.png'
import project_2 from '../../assets/images/adopttion.png'
import project_3 from '../../assets/images/E-Commerce-Brand.png'
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
const Project = () => {
    return (
        <div id='project'>
            <h1 className='text-center font-bold mb-10 lg:text-4xl text-2xl text-[#F65765]'> My Project </h1>
            {/* project one */}
            <div className='flex lg:flex-row flex-col gap-8 bg-[#1A2739] text-white p-6 rounded-md mb-5'>
                 <img className='lg:w-[40%] w-full rounded-md' src={project_2} alt="" />
                 <div className='flex-1'>
                      <h3 className='text-2xl font-extrabold mb-3'>Pet Adoption management application </h3>
                      <p className='mb-1'>● This is a user and admin role based website. It's mainly built around two things. One is to createa post for your pet adoption so that the user can request his pet for adoption.</p>
                      <p className='mb-1'>● The second thing is that a user can create a donation campaign for his pet so that a user can donate for his pet.</p>
                      <p className='mb-3'>● If you want to know more details about this project.then click the github link and you can see the project description in the readme file.</p>
                        <div className='mb-2'>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>React.js</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Node.js</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Express.js</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>MongoDB</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Jwt</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Firebase</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>TailwindCSS</button>
                        </div>
                      <button className='bg-[#f64765] text-white px-5 py-2 rounded-md font-bold mr-5'><a href="https://github.com/Shahadat-BD/pet-adoption-client-side.git" target='https://github.com/Shahadat-BD/pet-adoption-client-side.git'><FaGithub className='float-left items-center text-xl mt-[2px] mr-2'/>Github</a></button>
                      <button className='bg-[#f64765] text-white px-5 py-2 rounded-md font-bold mr-5'><a href="https://pet-adoption-auth-1c311.web.app/" target='https://pet-adoption-auth-1c311.web.app/'><CgWebsite className='float-left items-center text-xl mt-[2px] mr-2'/>Live site</a></button>
             
                 </div>
            </div>
            {/* project two */}
            <div className='flex lg:flex-row flex-col gap-8 bg-[#1A2739] text-white p-6 rounded-md mb-5'>
                 <img className='lg:w-[40%] w-full rounded-md' src={project_1} alt="" />
                 <div className='flex-1'>
                      <h3 className='text-2xl font-extrabold mb-3'>Library management system </h3>
                      <p className='mb-1'>● This website mainly created for Users can borrow the book and have to return the book within a specified time.</p>
                      <p className='mb-1'>● If any book becomes quantity 0 then no one else can borrow that book.And users can not see this book on all books pages.only can see the available book in all books pages.</p>
                      <p className='mb-3'>● If you want to know more details about this project.then click the github link and you can see the project description in the readme file.</p>
                      <div className='mb-2'>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>React.js</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Node.js</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Express.js</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>MongoDB</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Jwt</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Firebase</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>TailwindCSS</button>
                        </div>
                      <button className='bg-[#f64765] text-white px-5 py-2 rounded-md font-bold mr-5'><a href="https://github.com/Shahadat-BD/library-management-client-side.git" target='https://github.com/Shahadat-BD/library-management-client-side.git'><FaGithub className='float-left items-center text-xl mt-[2px] mr-2'/>Github</a></button>
                      <button className='bg-[#f64765] text-white px-5 py-2 rounded-md font-bold mr-5'><a href="https://bookstack-auth-7442e.web.app/" target='https://bookstack-auth-7442e.web.app/'><CgWebsite className='float-left items-center text-xl mt-[2px] mr-2'/>Live site</a></button>
                 </div>
            </div>
            {/* project three */}
            <div className='flex lg:flex-row flex-col gap-8 bg-[#1A2739] text-white p-8 rounded-md mb-5'>
                 <img className='lg:w-[40%] w-full rounded-md' src={project_3} alt="" />
                 <div className='flex-1'>
                      <h3 className='text-2xl font-extrabold mb-3'>Online BD-Shop</h3>
                      <p className='mb-1'>● this is CRUD based web application.Not a big project.6 type of brand shop has been exit in this project.</p>
                      <p className='mb-1'>● user can be product added,update,delete and he can see the product details and addToCart.</p>
                      <p className='mb-3'>● If you want to know more details about this project.then click the github link and you can see the project description in the readme file.</p>
                      <div className='mb-2'>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>React.js</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Node.js</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Express.js</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>MongoDB</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Firebase</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>TailwindCSS</button>
                        </div>
                      <button className='bg-[#f64765] text-white px-5 py-2 rounded-md font-bold mr-5'><a href="https://github.com/Shahadat-BD/brandShop-client-side.git" target='https://github.com/Shahadat-BD/brandShop-client-side.git'><FaGithub className='float-left items-center text-xl mt-[2px] mr-2'/>Github</a></button>
                      <button className='bg-[#f64765] text-white px-5 py-2 rounded-md font-bold mr-5'><a href="https://e-commerce-brand-shop.web.app/" target='https://e-commerce-brand-shop.web.app/'><CgWebsite className='float-left items-center text-xl mt-[2px] mr-2'/>Live site</a></button>
                 </div>
            </div>
        </div>
    );
};

export default Project;
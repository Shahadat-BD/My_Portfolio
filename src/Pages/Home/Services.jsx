import React from 'react';
import web_1 from '../../assets/svgIcon/responsive.png'
import web_2 from '../../assets/svgIcon/web-dev.png'
import web_3 from '../../assets/svgIcon/mern.png'
const Services = () => {
    return (
        <div className='py-5' id='services'>
            <div className='text-center lg:mb-8 mb-5'>
            <h3 className='lg:text-4xl text-2xl font-bold text-[#ED5671]'>My Services</h3>
            <p className='text-white text-xl font-bold'>How I cater to the client's needs</p>
            </div>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
           <div className='hover:bg-[#ED5671] text-white bg-[#1A2739] cursor-pointer rounded-md p-5 '>
                <img className='w-32  h-32' src={web_1} alt="" srcset="" />
                <h3 className='text-2xl font-bold my-3'>Front-End Development</h3>
                <ul>
                    <li>-Responsive web design</li>
                    <li>-Interactive User Interfaces (UI)</li>
                    <li>-Cross-Browser Compatibility</li>
                </ul>
            </div>
            <div className='hover:bg-[#A153E1] text-white bg-[#1A2739] cursor-pointer rounded-md p-5 '>
                 <img className='w-32  h-32' src={web_2} alt="" srcset="" />
                 <h3 className='text-2xl font-bold my-3'>Web development</h3>
                <ul>
                    <li>-Secure HTTPS Connection</li>
                    <li>-Cross-Browser Compatibility</li>
                    <li>-Fast Loading Speed</li>
                </ul>
            </div>
            <div className='hover:bg-[#e88c0b] text-white bg-[#1A2739] cursor-pointer rounded-md p-5 '>
                 <img className='w-32  h-32' src={web_3} alt="" srcset="" />
                 <h3 className='text-2xl font-bold my-3'>MERN stack development</h3>
                 <ul>
                    <li>-RESTful API Development</li>
                    <li>-Authentication and Authorization</li>
                    <li>-Single Page Application (SPA) Architecture</li>
                </ul>
            </div>
           </div>
        </div>
    );
};

export default Services;
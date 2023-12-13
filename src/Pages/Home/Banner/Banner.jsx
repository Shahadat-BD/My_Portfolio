import React from 'react';
import myImage from '../../../assets/images/shahadat.png'
import './Banner.css'
import Navbar from '../Navbar';
import resume from "./Shahadat's_Resume_for_Front-end_Web_Developer.pdf"
const Banner = () => {
    return (
        <div className=''> 
             <Navbar/>
            <div className='banner-design'>
                <div className='lg:px-16 px-5'>
                    <div className='flex lg:flex-row flex-col gap-5 justify-items-center items-center h-[540px]'>
                        <div className='w-4/5'>
                            <h3 className='text-5xl font-bold text-white'>Hi <br />I'am Shahadat hossain </h3>
                            <h4 className='text-white my-3 font-bold text-4xl'><span className='text-[#DF5586]'>Front-end web developer</span></h4>
                            <p className='lg:w-1/2 text-white'>Aspiring front-end developer evolving into a skilled full-stack developer,crafting seamless digital experiences. Passionate about coding and continuous learning</p>
                            <button className='hover:bg-[#DF5586] border border-white mt-5 text-white rounded-md px-7 py-3 font-bold text-lg mr-5'>Hire Me</button>
                            <a href={resume} download="Shahadat's_Resume_for_Front-end_Web_Developer.pdf">
                                   <button className='bg-[#DF5586] mt-5 text-white rounded-md px-7 py-3 font-bold text-lg'>Download CV</button>
                             </a>
                        </div>
                        <div>
                              <img className='rounded-3xl' src={myImage} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
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
                    <div className='flex lg:flex-row flex-col-reverse gap-5 items-center lg:h-[640px] h-full'>
                        <div className='lg:w-4/5 lg:mb-0 mb-10'>
                            <h3 className='lg:text-5xl text-3xl font-bold text-white'>Hi <br />I'am Shahadat hossain </h3>
                            <h4 className='text-white my-3 font-bold lg:text-4xl text-2xl'><span className='text-[#DF5586]'>Front-end web developer</span></h4>
                            <p className='lg:w-1/2 w-full text-white'>Aspiring front-end developer evolving into a skilled full-stack developer,crafting seamless digital experiences. Passionate about coding and continuous learning</p>
                            <button className='hover:bg-[#DF5586] border border-white mt-5 text-white rounded-md px-7 py-3 font-bold text-lg mr-5'>Hire Me</button>
                            <a href={resume} download="Shahadat's_Resume_for_Front-end_Web_Developer.pdf">
                                   <button className='bg-[#DF5586] mt-5 text-white rounded-md px-7 py-3 font-bold text-lg'>Download CV</button>
                             </a>
                        </div>
                        <div>
                              <img className='rounded-3xl w-full lg:mt-0 mt-20' src={myImage} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
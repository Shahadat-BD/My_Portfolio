import React from 'react';
import myImage from '../../../assets/images/shahadat-1.png'
import './Banner.css'
import Navbar from '../Navbar';
import resume from "./Shahadat's_Resume_for_Front-end_Web_Developer.pdf"
import { FaArrowCircleRight, FaArrowRight, FaCloudDownloadAlt } from 'react-icons/fa';
import {HiRewind} from  'react-icons/hi'
const Banner = () => {
    return (
        <div id='banner'>
            <Navbar />
            <div className='banner-design'>
                <div className='lg:px-16 px-5'>
                    <div className='flex lg:flex-row flex-col-reverse gap-5 items-center lg:h-[640px] h-full'>
                        <div className='lg:w-4/5 lg:mb-0 mb-10'>
                            <h3 className='lg:text-5xl text-3xl font-bold text-white'><span className='text-lg'>Hi, I'am </span> <br />Md. Shahadat Hossain </h3>
                            <h4 className='text-white my-3 font-bold lg:text-2xl text-xl'><span className='text-[#ED5671]'><span className='text-white text-lg'>And I'am a</span> Front-end web developer</span></h4>
                            <p className='lg:w-2/3 w-full text-white'>
                                Passionate React.js and JavaScript developer dedicated to crafting seamless, innovative web solutions. Transforming ideas into engaging user experiences with a keen eye for detail. Let's build something extraordinary together</p>
                            <a href={resume} download="Shahadat's_Resume_for_Front-end_Web_Developer.pdf">
                                <button className='bg-[#ED5671] mt-5 text-white rounded-md px-3 lg:py-3 py-2 font-bold text-md'>  
                                Download CV <FaCloudDownloadAlt className='float-right items-center text-2xl ml-3'/></button>
                            </a>
                            <button className='hover:bg-[#ED5671] border border-[#ED5671] mt-5 text-white rounded-md px-3 lg:py-3 py-2 font-bold text-md ml-5'>Hire Me <FaArrowCircleRight className='float-right items-center text-xl mt-[3px] ml-3'/></button>
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
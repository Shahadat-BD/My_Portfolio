import React from 'react';
import myImage from '../../../assets/images/shahadat.png'
import './Banner.css'
import Navbar from '../Navbar';
const Banner = () => {
    return (
        <div className=''> 
             <Navbar/>
            <div className='banner-design'>
                <div className='lg:px-16 px-5'>
                    <div className='flex lg:flex-row flex-col gap-5 justify-items-center items-center h-[540px]'>
                        <div className='w-4/5'>
                            <h3 className='text-5xl font-bold text-white'>I am shahadat hossain </h3>
                            <h4 className='text-white my-3 font-bold text-xl'>I am front end web developer</h4>
                            <p className='lg:w-1/2 text-white'>Aspiring front-end developer evolving into a skilled full-stack developer,crafting seamless digital experiences. Passionate about coding and continuous learning</p>
                            <button className='bg-red-500 mt-5 text-white rounded-md px-8 py-3'>Download CV</button>
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
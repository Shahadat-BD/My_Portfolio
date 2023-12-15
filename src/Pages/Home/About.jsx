import React from 'react';
import shahadat from '../../assets/images/shahadat.png'
import {FaAddressBook, FaGithub, FaPhone, FaRegAddressCard} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
const About = () => {
    return (
        <div className='py-10' id='about'>
        <div className='flex lg:flex-row flex-col gap-5 items-center'>
           <div className='lg:w-[40%] w-full'>
               <img className=' w-full rounded-3xl'  src={shahadat} alt="" srcset="" />
           </div>
            <div className='flex-1'>
              <div className='text-white lg:ml-16'>
                <h1 className='font-bold text-xl text-[#F65765]'>About me</h1>
                 <h3 className='lg:text-5xl text-3xl font-bold my-2 lg:w-[90%]'>I can create any design you desire.</h3>
                <p className='my-3 font-medium text-[#ffffffd6]'>Passionate front-end web developer with a flair for crafting immersive and user-centric digital experiences.Proficient in HTML,CSS,Tailwind CSS, JavaScript,React.JS. I specialize in transforming creative concepts into responsive,visually appealing websites.Committed to staying abreast of industry trends,I bring a keen eye for design and a dedication to delivering seamless,interactive interfaces.I have also a Basic Knowledge on MERN stack.And with that basic knowledge I have created three three CRUD web application.So Let's collaborate to bring your digital vision to life</p>
                <div className='font-medium text-[#ffffffd6]'>
                    <div className='flex items-center gap-3'>
                       <FaPhone/>
                       <p> <span className='font-extrabold'> Phone </span> : +8801883160434(watsapp)</p>
                    </div>
                    <div className='flex items-center gap-3'>
                       <FaAddressBook/>
                       <p><span className='font-extrabold'> Address </span>  : Agrabad , Chattogram</p>
                    </div>
                    <div className='flex items-center gap-3 mb-5'>
                       <MdEmail/>
                       <p className=''><span className='font-extrabold'> Email </span>  : shahadatstudent34@gmail.com</p>
                    </div>
                </div>
                
                <button className='bg-[#f64765] text-white px-5 py-2 rounded-md font-bold mr-5'><a href="https://github.com/Shahadat-BD" target='https://github.com/Shahadat-BD'><FaGithub className='float-left items-center text-xl mt-[2px] mr-2'/>Github</a></button>
                <button className='hover:bg-[#f64765]  hover:text-white border border-[#f65765] text-[#f65765] px-5 py-2 rounded-md font-bold '><a href="https://drive.google.com/file/d/1UEsuZdLKqQVek_10X_YZ-ea0VsFoZFbE/view?usp=sharing" target='https://drive.google.com/file/d/1UEsuZdLKqQVek_10X_YZ-ea0VsFoZFbE/view?usp=sharing' ><FaRegAddressCard className='float-left items-center text-xl mt-[2px] mr-2'/> Resume</a></button>
             
              </div>
            </div>
        </div>
    </div>
    );
};

export default About;
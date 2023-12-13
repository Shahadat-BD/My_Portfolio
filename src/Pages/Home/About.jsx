import React from 'react';
import shahadat from '../../assets/images/shahadat.png'
const About = () => {
    return (
        <div className='py-10' id='about'>
        <div className='flex lg:flex-row flex-col gap-5 items-center'>
           <div className='lg:w-4/5 w-full'>
               <img className='lg:w-3/4 w-full rounded-3xl'  src={shahadat} alt="" srcset="" />
           </div>
            <div className='lg:w-[90%] w-full'>
              <div className='text-white'>
                <h1 className='font-bold text-xl text-[#F65765] '>About me</h1>
                 <h3 className='lg:text-4xl text-3xl font-bold my-2'>I can create any design you desire.</h3>
                <p className='my-3 font-medium text-[#ffffffd6]'>Passionate front-end web developer with a flair for crafting immersive and user-centric digital experiences. Proficient in HTML,CSS,Tailwind CSS, JavaScript,React.JS. I specialize in transforming creative concepts into responsive, visually appealing websites. Committed to staying abreast of industry trends, I bring a keen eye for design and a dedication to delivering seamless, interactive interfaces.I have also a Basic Knowledge on MERN stack. And with that basic knowledge I have created three three CRUD web application.So Let's collaborate to bring your digital vision to life</p>
                <div className='font-medium text-[#ffffffd6]'>
                    <p>Name : Md. Shahdat Hossain</p>
                    <p>Phone : +8801883160434(watsapp)</p>
                    <p>Address : Agrabad , Chattogram</p>
                    <p className='mb-5'>Email : shahadatstudent34@gmail.com</p>
                </div>
                
                <button className='bg-[#f64765] text-white px-5 py-2 rounded-md font-bold mr-5'><a href="https://github.com/Shahadat-BD" target='https://github.com/Shahadat-BD'>Github</a></button>
                <button className='hover:bg-[#f64765]  hover:text-white border border-[#f65765] text-[#f65765] px-5 py-2 rounded-md font-bold '><a href="https://drive.google.com/file/d/1UEsuZdLKqQVek_10X_YZ-ea0VsFoZFbE/view?usp=sharing" target='https://drive.google.com/file/d/1UEsuZdLKqQVek_10X_YZ-ea0VsFoZFbE/view?usp=sharing' >Resume</a></button>
             
              </div>
            </div>
        </div>
    </div>
    );
};

export default About;
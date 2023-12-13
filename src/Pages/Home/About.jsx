import React from 'react';
import shahadat from '../../assets/images/shahadat.png'
const About = () => {
    return (
        <div className='py-10' id='about'>
        <div className='flex lg:flex-row flex-col gap-5 items-center'>
           <div className='w-4/5'>
               <img className='w-3/4 rounded-3xl'  src={shahadat} alt="" srcset="" />
           </div>
            <div className='w-[90%]'>
              <div>
                <h1 className='font-bold text-xl text-[#F65765]'>About me</h1>
                 <h3 className='text-4xl font-bold my-2'>I can create any design you desire.</h3>
                <p className='my-3 font-medium text-gray-700'>Passionate front-end web developer with a flair for crafting immersive and user-centric digital experiences. Proficient in HTML, CSS, and JavaScript, I specialize in transforming creative concepts into responsive, visually appealing websites. Committed to staying abreast of industry trends, I bring a keen eye for design and a dedication to delivering seamless, interactive interfaces. Let's collaborate to bring your digital vision to life</p>
                <div className='font-medium text-gray-700'>
                    <p>Name : md shahdat hossain</p>
                    <p>Phone : (+88)01883160434(watsapp)</p>
                    <p>Address : Agrabad , Chattogram</p>
                    <p className='mb-5'>Email : shahadatstudent34@gmail.com</p>
                </div>
                
                <button className='bg-[#f64765] text-white px-5 py-2 rounded-md font-bold mr-5'><a href="">Github</a></button>
                <button className='hover:bg-[#f64765]  hover:text-white border border-[#f65765] text-[#f65765] px-5 py-2 rounded-md font-bold '><a href="">Linkedin</a></button>
          
              </div>
            </div>
        </div>
    </div>
    );
};

export default About;
import React from 'react';
import footerImg from '../../assets/images/footer-img.png'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
    return (
        <div className='bg-[#1A2739] text-white mt-10'>
            <div className='text-center py-8 lg:px-0 px-5'>
                 <img className='w-28 h-28 m-auto rounded-full' src={footerImg} alt="" srcset="" />
                 <h3 className='mt-3 text-xl font-bold'>Md. Shahadat hossain</h3>
                 <p className='lg:w-1/2 m-auto my-2'>Passionate React.js and JavaScript developer dedicated to crafting seamless, innovative web solutions. Transforming ideas into engaging user experiences with a keen eye for detail. Let's build something extraordinary together</p>
                <div className='flex items-center gap-6 justify-center mt-5'>
                   <a href="https://github.com/Shahadat-BD" target='https://github.com/Shahadat-BD'>
                   <FaGithub  className='text-4xl cursor-pointer bg-[#ED5671] p-2 rounded-md '/>
                   </a>
                    <MdEmail className='text-4xl cursor-pointer bg-[#ED5671] p-2 rounded-md '/>
                    <a href="https://www.linkedin.com/in/shahadat434/" target='https://www.linkedin.com/in/shahadat434/'>
                    <FaLinkedin className='text-4xl cursor-pointer bg-[#ED5671] p-2 rounded-md '/>
                    </a>
                    <a href="https://web.facebook.com/profile.php?id=100027084285816" target='https://web.facebook.com/profile.php?id=100027084285816'>
                    <FaFacebook className='text-4xl cursor-pointer bg-[#ED5671] p-2 rounded-md '/>
                    </a>
                </div>
            </div>
            <div className='text-center font-bold '>
                    <h2>all right reserved . @created by <span className='text-[#ED5671]'>shahadat hossain</span></h2>
            </div>
        </div>
    );
};

export default Footer;
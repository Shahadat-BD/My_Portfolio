import React from 'react';
import project_1 from '../../assets/images/BookStack.png'
import project_2 from '../../assets/images/adopttion.png'
import project_3 from '../../assets/images/E-Commerce-Brand.png'
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
const Project = () => {
    return (
        <div id='project'>
            <h1 className='text-center mb-10 font-bold lg:text-4xl text-2xl text-[#F65765]'>My Project </h1>
            <div className='flex lg:flex-row flex-col gap-8 bg-[#1A2739] text-white p-8 rounded-md'>
                 <img className='lg:w-[40%] w-full' src={project_1} alt="" />
                 <div className='flex-1'>
                      <h3 className='text-2xl font-extrabold mb-3'>Library management system </h3>
                      <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quaerat provident quam ratione ex sint consequuntur hic dolorem sapiente dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui distinctio excepturi porro non? Nobis quia unde molestiae fuga sint ullam? Voluptatibus voluptates a sapiente minima eius doloremque explicabo dolor? </p>
                      <button className='bg-[#f64765] text-white px-5 py-2 rounded-md font-bold mr-5'><a href="https://github.com/Shahadat-BD/library-management-client-side.git" target='https://github.com/Shahadat-BD/library-management-client-side.git'><FaGithub className='float-left items-center text-xl mt-[2px] mr-2'/>Github</a></button>
                      <button className='bg-[#f64765] text-white px-5 py-2 rounded-md font-bold mr-5'><a href="https://bookstack-auth-7442e.web.app/" target='https://bookstack-auth-7442e.web.app/'><CgWebsite className='float-left items-center text-xl mt-[2px] mr-2'/>Live site</a></button>
                 </div>
            </div>
        </div>
    );
};

export default Project;
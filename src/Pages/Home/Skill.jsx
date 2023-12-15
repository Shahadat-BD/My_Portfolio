import React from 'react';
import skill_1 from '../../assets/skillIcon/html.png'
import skill_2 from '../../assets/skillIcon/css.png'
import skill_3 from '../../assets/skillIcon/tailwind.png'
import skill_4 from '../../assets/skillIcon/bootstrap.png'
import skill_5 from '../../assets/skillIcon/mui.png'
import skill_6 from '../../assets/skillIcon/js.png'
import skill_7 from '../../assets/skillIcon/react.png'
import skill_8 from '../../assets/skillIcon/firebase.png'
import skill_9 from '../../assets/skillIcon/node.png'
import skill_10 from '../../assets/skillIcon/mongoDB.png'
import skill_11 from '../../assets/skillIcon/npm.png'
import skill_12 from '../../assets/skillIcon/vercel.png'

const Skill = () => {
    return (
        <div className='py-5' id='skill'>
             <h1 className='text-center font-bold lg:text-4xl text-2xl text-[#ED5671] my-5  lg:my-10 '>My Technology Skill</h1>
    
             <div className='grid lg:grid-cols-4 md:grid-cols-4 lg:w-[60%] w-full m-auto justify-items-center grid-cols-3 gap-y-5 lg:gap-y-10'>
             <img className='shadow-xl relative shadow-[#1A2739] p-7 w-[96px] h-24 rounded-md ' src={skill_1} alt="" srcset="" />
            <img className='shadow-xl shadow-[#1A2739] p-7 w-[96px] h-24 rounded-md ' src={skill_2} alt="" srcset="" />
            <img className='shadow-xl shadow-[#1A2739] p-7 w-[96px] h-24 rounded-md ' src={skill_3} alt="" srcset="" />
            <img className='shadow-xl shadow-[#1A2739] p-7 w-[96px] h-24 rounded-md ' src={skill_4} alt="" srcset="" />
            <img className='shadow-xl shadow-[#1A2739] p-7 w-[96px] h-24 rounded-md ' src={skill_5} alt="" srcset="" />
            <img className='shadow-xl shadow-[#1A2739] p-7 w-[96px] h-24 rounded-md ' src={skill_6} alt="" srcset="" />
            <img className='shadow-xl shadow-[#1A2739] p-7 w-[96px] h-24 rounded-md ' src={skill_7} alt="" srcset="" />
            <img className='shadow-xl shadow-[#1A2739] p-7 w-[96px] h-24 rounded-md ' src={skill_8} alt="" srcset="" />
            <img className='shadow-xl shadow-[#1A2739] p-7 w-[96px] h-24 rounded-md ' src={skill_9} alt="" srcset="" />
            <img className='shadow-xl shadow-[#1A2739] p-7 w-[96px] h-24 rounded-md ' src={skill_10} alt="" srcset="" />
            <img className='shadow-xl shadow-[#1A2739] p-7 w-[96px] h-24 rounded-md ' src={skill_11} alt="" srcset="" />
            <img className='shadow-xl shadow-[#1A2739] p-7 w-[96px] h-24 rounded-md ' src={skill_12} alt="" srcset="" />
        </div>
        </div>
    );
};

export default Skill;
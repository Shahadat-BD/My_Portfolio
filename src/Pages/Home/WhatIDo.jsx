import React from 'react';
import css from  '../../assets/svgIcon/css.png'
import responsive from '../../assets/svgIcon/responsive.png'
import react from '../../assets/svgIcon/react.png'
import mern from '../../assets/svgIcon/mern.png'
const WhatIDo = () => {
    return (
        <div>
             <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-5'>
                  <div className='bg-[#1A2739] text-white py-5 rounded-md' >
                    <div className='flex items-center gap-3 px-5'>
                         <img className='w-16 h-16 bg-[#ED5671] rounded-md p-2' src={css} alt="" srcset="" />
                        <div>
                           <p className='font-bold text-3xl mb-2'> 5 + </p>
                           <p className='uppercase font-semibold text-sm'>Raw Css Project</p>
                        </div>
                    </div>
                  </div>
                  <div className='bg-[#1A2739] text-white py-5 rounded-md' >
                  <div className='flex items-center gap-3 px-5'>
                         <img className='w-16 h-16 bg-[#ED5671] rounded-md p-2' src={responsive} alt="" srcset="" />
                        <div>
                           <p className='font-bold text-3xl mb-2'> 6 + </p>
                           <p className='uppercase font-semibold text-sm'>Responsive web design</p>
                        </div>
                    </div>
                  </div>
                  <div className='bg-[#1A2739] text-white py-5 rounded-md'>
                  <div className='flex items-center gap-3 px-5'>
                         <img className='w-16 h-16 bg-[#ED5671] rounded-md p-2' src={react} alt="" srcset="" />
                        <div>
                           <p className='font-bold text-3xl mb-2'> 5 + </p>
                           <p className='uppercase font-semibold text-sm'>React web app</p>
                        </div>
                    </div>
                  </div>
                  <div className='bg-[#1A2739] text-white py-5 rounded-md'>
                  <div className='flex items-center gap-3 px-5'>
                         <img className='w-16 h-16 bg-[#ED5671] rounded-md p-2' src={mern} alt="" srcset="" />
                        <div>
                           <p className='font-bold text-3xl mb-2'> 3 + </p>
                           <p className='uppercase font-semibold text-sm'>Mern stact project</p>
                        </div>
                    </div>
                  </div>
             </div>
        </div>
    );
};

export default WhatIDo;
import React from 'react';
import education from '../../assets/images/education.png'
const Education = () => {
    return (
        <div className='lg:w-4/5 w-full m-auto pb-8' id='education'>
            <h1 className='text-[#ED5671] font-bold lg:text-4xl text-2xl text-center lg:py-12 py-5'> Education Qualification </h1>
            <ul className="timeline text-white timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                      <img className='h-8 w-8' src={education} alt="" srcset="" />
                    </div>
                    <div className="timeline-start md:text-end  mb-10 mr-5 border-b-2 border-gray-500 rounded-md pb-5">
                        <h3 className="lg:text-2xl text-xl font-black">B.A (Hon's) in Islamic Studies </h3>
                        <p className='font-medium text-lg my-2'>Bangladesh National University</p>
                        <time className="font-mono italic">2022 - Present</time>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                    <img className='h-8 w-8' src={education} alt="" srcset="" />
                    </div>
                    <div className="timeline-end mb-10 lg:ml-5 border-b-2 border-gray-500 rounded-md pb-5">
                    <div className="lg:text-2xl text-xl font-black">Alim in general group</div>
                       <p className='font-medium text-lg my-2'>Al-amin Baria Kamil Madrasah</p>
                      <div className='flex items-center gap-8'>
                      <time className="font-mono italic">2019 - 2020</time>
                         <p>GPA : 4.71/5</p>
                      </div>
                    </div>
                    <hr />
                </li>
                
                <li>
                    <hr />
                    <div className="timeline-middle">
                      <img className='h-8 w-8' src={education} alt="" srcset="" />
                    </div>
                    <div className="timeline-start md:text-end  mb-10 mr-5 border-b-2 border-gray-500 rounded-md pb-5">
                        <div className="lg:text-2xl text-xl font-black">Dhakil in general group </div>
                        <p className='font-medium text-lg my-2'>Urkirchar Gausia sunnia Madrasah</p>
                        <div className='flex items-center lg:justify-end  gap-8'>
                          <time className="font-mono italic">2019 - 2020</time>
                          <p>GPA : 4.75/5</p>
                      </div>
                    </div>
                    <hr />
                </li>
              
               
            </ul>
        </div>
    );
};

export default Education;
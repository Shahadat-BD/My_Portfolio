import React from 'react';
import project_1 from '../../assets/images/HomePage-2.png'
import project_2 from '../../assets/images/HomePage.png'
import project_3 from '../../assets/images/advHome.png'
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
const Project = () => {
    return (
        <div id='project'>
            <h1 className='text-center font-bold mb-10 lg:text-4xl text-2xl text-[#F65765]'> My Project </h1>
            {/* project one */}
            <div className='flex lg:flex-row flex-col gap-8 bg-[#1A2739] text-white p-6 border-l-4 border-[#F65765] rounded-md mb-5'>
                 <img className='lg:w-[40%]  w-full rounded-md' src={project_2} alt="" />
                 <div className='flex-1'>
                      <h3 className='text-2xl font-extrabold mb-3'>University Department Management website</h3>
                      <p className='mb-3'>● 📚 এই প্রজেক্টটি একটি Islamic Studies ডিপার্টমেন্টের জন্য তৈরি, যেখানে শিক্ষক ও শিক্ষার্থীদের তথ্য, Routine , Attandance System , Result , Testimonial পরিচালনা করা হয়।</p>
                      <p className='mb-3'>● 🔐 Firebase Authentication দিয়ে লগইন সিস্টেম যুক্ত করা হয়েছে এবং User Role Management (student/teacher) অনুযায়ী আলাদা Dashboard ব্যবহারের সুযোগ রয়েছে।.</p>
                      <p className='mb-3'>● 📄 শিক্ষার্থীরা তাদের একাডেমিক তথ্য যোগ করতে পারে এবং শিক্ষকরা Notice পোস্ট ও পরিচালনা করতে পারে; সব তথ্য MongoDB তে সংরক্ষণ করা হয়।</p>
                        <div className='mb-2'>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>React.js</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Node.js</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Express.js</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>MongoDB</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Jwt</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Firebase</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>TailwindCSS</button>
                        </div>
                      <button className='bg-[#f64765] text-white px-5 py-2 rounded-md font-bold mr-5'><a href="https://github.com/Shahadat-BD/islamic_studies_department.git" target='https://github.com/Shahadat-BD/islamic_studies_department.git'><FaGithub className='float-left items-center text-xl mt-[2px] mr-2'/>Github</a></button>
                      <button className='hover:bg-[#f64765]  hover:text-white border border-[#f65765] text-[#f65765] px-5 py-2 rounded-md font-bold mr-5'><a href="https://islamic-studies-department.vercel.app/" target='https://islamic-studies-department.vercel.app/'><CgWebsite className='float-left items-center text-xl mt-[2px] mr-2'/>Live site</a></button>
             
                 </div>
            </div>
            {/* project two */}
            <div className='flex lg:flex-row flex-col gap-8 bg-[#1A2739] text-white p-6 border-l-4 border-[#A153E1] rounded-md mb-5'>
                 <img className='lg:w-[40%] w-full rounded-md' src={project_1} alt="" />
                 <div className='flex-1'>
                      <h3 className='text-2xl font-extrabold mb-3'> E-Commerce Website (SPA)  </h3>
                      <p className='mb-3'>●  একটি সম্পূর্ণ রেসপনসিভ ই-কমার্স ওয়েব অ্যাপ, যেখানে মৌসুমি ফল, রেশন ও কাপড়সহ বিভিন্ন প্রোডাক্ট অনলাইনে অর্ডার করা যায়</p>
                      <p className='mb-3'>●  ইউজার-ফ্রেন্ডলি কার্ট ও চেকআউট সিস্টেম, WhatsApp অর্ডার, লাইট-ডার্ক মোড, ফিডব্যাক স্লাইডার, এবং কাস্টম ক্যাটাগরি যুক্ত করা হয়েছে।</p>
                      <p className='mb-3'>●  React.js, Tailwind CSS ও DaisyUI ব্যবহার করে ডাইনামিক রাউটিংসহ একটি আধুনিক ও দ্রুতগতির UI তৈরি করা হয়েছে।</p>
                      <div className='mb-2'>
                         <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>React.js</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>TailwindCSS</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Desi UI</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>LocalStorage</button>
                        </div>
                      <button className='bg-[#f64765] text-white px-5 py-2 rounded-md font-bold mr-5'><a href="https://github.com/Shahadat-BD/Organic-Product.git" target='https://github.com/Shahadat-BD/Organic-Product.git'><FaGithub className='float-left items-center text-xl mt-[2px] mr-2'/>Github</a></button>
                      <button className='hover:bg-[#f64765]  hover:text-white border border-[#f65765] text-[#f65765] px-5 py-2 rounded-md font-bold mr-5'><a href="https://organic-product34.netlify.app/" target='https://organic-product34.netlify.app/'><CgWebsite className='float-left items-center text-xl mt-[2px] mr-2'/>Live site</a></button>
                 </div>
            </div>
            {/* project three */}
            <div className='flex lg:flex-row flex-col gap-8 bg-[#1A2739] text-white p-6 border-l-4 border-[#e88c0b] rounded-md mb-5'>
                 <img className='lg:w-[40%] w-full rounded-md' src={project_3} alt="" />
                 <div className='flex-1'>
                      <h3 className='text-2xl font-extrabold mb-3'>Advocate Portfolio Website</h3>
                      <p className='mb-3'>● এটি একজন অ্যাডভোকেটের জন্য বানানো একটি প্রফেশনাল ওয়েব অ্যাপ, যেখানে তার সেবাসমূহ, অভিজ্ঞতা ও পরিচিতি উপস্থাপন করা হয়েছে।</p>
                      <p className='mb-3'>● ইউজাররা সহজে “Free Consultation”, Call Now, ও WhatsApp এর মাধ্যমে যোগাযোগ করতে পারে।</p>
                      <p className='mb-3'>● সাইটে রয়েছে FAQ, Testimonial, এবং ১০টি বিস্তারিত বাংলা Blog যা আইন বিষয়ক সচেতনতা বৃদ্ধিতে সহায়ক।</p>
                      <div className='mb-2'>
                       <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>React.js</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>TailwindCSS</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'> React Router</button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>EmailJS </button>
                        <button className='bg-[#0f447dca] text-xs text-white rounded-md font-bold px-5 py-2 mr-2 mb-2'>Responsive Design</button>
                      
                        </div>
                      <button className='bg-[#f64765] text-white px-5 py-2 rounded-md font-bold mr-5'><a href="https://github.com/Shahadat-BD/adv-portfolio.git" target='https://github.com/Shahadat-BD/adv-portfolio.git'><FaGithub className='float-left items-center text-xl mt-[2px] mr-2'/>Github</a></button>
                      <button className='hover:bg-[#f64765]  hover:text-white border border-[#f65765] text-[#f65765] px-5 py-2 rounded-md font-bold mr-5'><a href="https://adv-didar.netlify.app/" target='https://adv-didar.netlify.app/'><CgWebsite className='float-left items-center text-xl mt-[2px] mr-2'/>Live site</a></button>
                 </div>
            </div>
        </div>
    );
};

export default Project;
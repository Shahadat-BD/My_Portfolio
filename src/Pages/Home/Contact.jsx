import { FaAddressBook, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import contact from '../../assets/images/contact.png'
const Contact = () => {
    return (
      <div id="contact" className="pb-10">
          <h1 className="lg:py-10 py-5 lg:text-4xl text-2xl font-bold text-center text-[#ED5671]">Contact Me</h1>
          <div className="lg:w-[95%] m-auto w-full bg-[#1A2739] rounded-md ">
              <div className='flex items-center'>
                {/* <div className='text-white lg:w-1/2'>
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
             
                </div> */}
                <img  className="lg:block hidden lg:w-[45%]  bg-gray-600" src={contact} alt="" srcset="" />
             <form action="" className="flex-1 px-10 lg:py-0 py-5">
                <h3 className="text-center text-white text-3xl font-bold">Get In Touch</h3>
                <div className="mb-2">
                   <label htmlFor="Name" className="text-white">Name</label>
                   <input  className="form-control mt-2  bg-gray-600 text-white   w-full p-2 rounded-sm" type="text" name="name" placeholder="write your name" id="" />
                </div>
                <div className="mb-2">
                   <label htmlFor="Email" className="text-white" >Email</label>
                   <input className="form-control mt-2  bg-gray-600 text-white  w-full p-2 rounded-sm" type="email" name="email" placeholder="write your email" id="" /> 
                </div>
                <div className="mb-2">
                   <label htmlFor="Message" className="text-white">Message</label>
                    <textarea  className="form-control bg-gray-600 text-white mt-2  w-full p-2 h-32 rounded-sm"  name="message"  placeholder="write your message"  id="" ></textarea>
                </div>
                <div>
                    <input className="font-bold mt-3 text-white bg-[#ED5671] rounded-sm w-full p-2 text-center" type="submit" value="Submit" />
                </div>
             </form>
             </div>
          </div>
      </div>
    );
};

export default Contact;
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

const skills = [
  { image: skill_1, name: "HTML" },
  { image: skill_2, name: "CSS" },
  { image: skill_3, name: "Tailwind" },
  { image: skill_4, name: "Bootstrap" },
  { image: skill_5, name: "Material UI" },
  { image: skill_6, name: "JavaScript" },
  { image: skill_7, name: "React.js" },
  { image: skill_8, name: "Firebase" },
  { image: skill_9, name: "Node.js" },
  { image: skill_10, name: "MongoDB" },
  { image: skill_11, name: "NPM" },
  { image: skill_12, name: "Vercel" },
];

const Skill = () => {
  return (
    <div className='py-5' id='skill'>
      <h1 className='text-center font-bold lg:text-4xl text-2xl text-[#ED5671] my-5 lg:my-10'>My Technology Skill</h1>

      <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-8 gap-x-4 lg:w-[60%] w-full mx-auto justify-items-center'>
        {skills.map((skill, index) => (
          <div key={index} className='flex flex-col items-center text-center'>
            <img className='shadow-xl shadow-[#1A2739] p-5 w-[80px] h-[80px] rounded-md' src={skill.image} alt={skill.name} />
            <p className='mt-2 text-sm font-medium text-gray-200'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

import React from 'react';
import About from './About';
import Banner from './Banner/Banner';
import Education from './Education';
import WhatIDo from './WhatIDo';
import Skill from './Skill';
import Services from './services';
// import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className='lg:px-16 px-5'>
                <WhatIDo/>
                <Skill/>
                <About/>
                <Services/>
                <Education/>
            
                {/* <Contact/> */}
           </div>
        </div>
    );
};

export default Home;
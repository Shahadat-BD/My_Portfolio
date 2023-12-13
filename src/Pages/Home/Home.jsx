import React from 'react';
import About from './About';
import Banner from './Banner/Banner';
import Education from './Education';
// import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className='lg:px-8 px-5'>
                <Education/>
                <About/>
                {/* <Contact/> */}
           </div>
        </div>
    );
};

export default Home;
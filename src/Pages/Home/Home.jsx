import React from 'react';
import About from './About';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
           <div className='lg:px-8 px-5'>
              <About/>
           </div>
        </div>
    );
};

export default Home;
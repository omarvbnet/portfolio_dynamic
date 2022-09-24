import React from 'react';

import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';

const Home = () => {
    return (
        <div dir='rtl' id='home'>
            <Hero />
           
            <Projects />
            <Technologies />
            <About />
            <Contact />
        </div>
    );
};

export default Home;
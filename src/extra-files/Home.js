import React from 'react';
import CollapsibleNavbar from '../components/ResponsiveNavbarReact';
import About from '../components/About';
import Projects from '../componentsto="/project"s';
import ContactMe from '../components/ContactMe';
import Skill from '../components/skills';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <CollapsibleNavbar/>
        <About/>
        <Skill/>
        <Projects/>
        <ContactMe/>
        <Footer/>
         
    </div>
  )
}

export default Home;

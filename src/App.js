import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import PageThemeChange from './components/PageThemeChange';
import ContactMe from './components/ContactMe';
// import SignIn from "./components/SignIn";
import Experience from './components/Experience';
import Skill from './components/skills';
import CollapsibleExample from './components/ResponsiveNavbarReact';
import Learn from './components/learnCWH';

function App() {
  return(
    <Router>
      {/* <Navbar /> */}
      {/* <Learn title="Hey, I am Isha" searchBar={true}/> */}
      <CollapsibleExample/>
       <PageThemeChange/>
      <About/>
      <Skill/>
      <Projects/>
      <ContactMe/> 
      <Routes>
        <Route path="/" element={
          <>
          {/* <HeroSection />
          <ContactUs /> */}
           </> } />
      
      {/* <Route path="/uploadFiles" element={<UploadFiles />} /> 
      <Route path="/gallery" element={<GalleryRetrieve />} /> 
      <Route path="/login" element={<SignIn />} /> */}
      </Routes>
      <Footer />
      </Router>
      
  );
};
export default App;
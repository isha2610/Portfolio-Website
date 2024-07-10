import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/HeroSection';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import PageThemeChange from './components/PageThemeChange';
// import ContactUs from './components/ContactUs';
// import SignIn from "./components/SignIn";

function App() {
  return(
    <Router>
      <Navbar />
      <About/>
      <Projects/>
      <PageThemeChange/>
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
import React from "react";
import { Link } from "react-router-dom";
import Resume from "C:/Users/Lenovo/MyProjects/Portfolio Website/portfolio/src/assets/Isha__Resume.pdf"
// import Button from "react-bootstrap/esm/Button";

const About = () => {
//   const handleDownload = () => {
//     // window.location.href = "C:/Users/Lenovo/MyProjects/Portfolio Website/portfolio/src/assets/Isha__Resume.pdf"
//     <a href={Resume} download="Isha's Resume" target='_blank'>
//    <Button>My Example Doc</Button>
// </a> 
//   };
  return (
    // <div class="jumbotron">
    <div class="container p-4">
      <br/><br/><br/><h1>Full Stack Developer <br/></h1>
      <br/><p>A Full Stack Software Developer efficient in React JS, Java, MongoDB and SQL. <br/>Experienced in working over agile methodologies.<br/> Desirous of a development role in a positive and growth oriented environment. <br/> Committed to continuous learning and applying new technologies effectively.<br/></p>
      <div class="lc-block d-grid gap-2 d-sm-flex pt-4 mb-5"> <Link class="btn btn-light btn-lg px-4 gap-3" to="/" role="button">Know more</Link>
        {/* <Link class="btn btn-outline-secondary btn-lg px-4" role="button" onClick={handleDownload} >Download CV</Link> */}
        <a className="btn btn-outline-secondary btn-lg px-4"  href={Resume} download="Isha's Resume" target='_blank'>
        Download CV</a>
      </div>
    </div>
  // </div>
  );
};
export default About;
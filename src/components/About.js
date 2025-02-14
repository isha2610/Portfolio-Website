import React from "react";
import { Link } from "react-router-dom";
import Resume from "../assets/Isha_Resume.pdf";
import {useTypewriter, Cursor} from "react-simple-typewriter";

//Full Stack Developer

const About = () => {

  const [profile] = useTypewriter({
    words: ['Isha Khurana', 'Software Engineer', 'Full Stack Developer'],
    loop: false,
    typeSpeed: 60,
    deleteSpeed: 30,
  })

  return (
    <div className="jumbotron">
      <div className="container fluid p-4">
        <div className="py-4">

          <h1 style={{marginTop:'50px'}}>
            Hey! I am {' '}
            <span style={{fontWeight: "bold", fontFamily: '-moz-initial', color: "#BB86FC" }}>
              {profile}
              <Cursor cursorStyle="|" />
            </span>
          </h1>
        </div>
        
        <br />
        <p>
          A Full Stack Software Developer efficient in React JS, Java, MongoDB
          and SQL. <br />
          Experienced in working over agile methodologies.
          <br /> Desirous of a development role in a positive and growth
          oriented environment. <br /> Committed to continuous learning and
          applying new technologies effectively.
          <br />
          <br />
        </p>
        <div class="lc-block d-grid gap-2 d-sm-flex pt-4 mb-5">
          {" "}
          <Link class="btn btn-light btn-lg px-4 gap-3" to="/" role="button">
            Know Socials
          </Link>
          {/* <Link class="btn btn-outline-secondary btn-lg px-4" role="button" onClick={handleDownload} >Download CV</Link> */}
          <a
            className="btn btn-outline-secondary btn-lg px-4"
            href={Resume}
            download="Isha's Resume"
            target="_blank"
            rel="noopenner noreferrer"
          >
            Download CV
          </a>
          {/* rel="noopenner noreferrer" is for security vulnerability of target='_blank' */}
        </div>
      
      {/* <div>
        <div class="rotater">
          <div class="btn btn-icon">
          <i class="fa fa-github"/></div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
          <i class="fa fa-linkedin"/></div>
        </div>
        <div class="rotater">
          <div class="btn btn-icon">
          <i class="fa fa-github"/></div>
        </div>
      </div> */}
      </div>
    </div>
  );
};
export default About;
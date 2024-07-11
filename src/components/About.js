import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div class="jumbotron">
    <div class="container p-4 pt-300">
      <br/><h1>Full Stack Developer <br/></h1>
      <p>A B. Tech. (IT) Software Engineer, expertized in React JS, Java, MongoDB and SQL. <br/>A dev role desirous, willing to work in a positive and growth oriented environment. <br/> Always up to work and things. xyz hobbies are included! :)</p>
    
      <div class="lc-block d-grid gap-2 d-sm-flex pt-4 mb-5"> <Link class="btn btn-light btn-lg px-4 gap-3" to="/" role="button">Know more</Link>
        <Link class="btn btn-outline-secondary btn-lg px-4" to="/" role="button">Get in touch</Link>
      </div>
    </div>
  </div>
  );
};
export default About;
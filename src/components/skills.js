import React from "react";
import image1 from "./cpp.png";
import cpp from "../assets/skills/cpp.png";
import azure from "../assets/skills/azure.png";
import Bitrix24 from "../assets/skills/Bitrix24.png";
import Java from "../assets/skills/java.png";
import mongodb from "../assets/skills/mongodb.png";
import php from "../assets/skills/php.png";
import reactjs from "../assets/skills/reactjs.png";
import splunk from "../assets/skills/splunk.png";
import sql from "../assets/skills/sql.png";
import sdlc from "../assets/skills/sdlc.png";
import dsa from "../assets/skills/dsa.png";
import git from "../assets/skills/git.png";

// import { Link } from "react-router-dom";

//Skills GRID

function Skill() {
  return (
    <div>
      <div class="page-header text-center p-4">
        <h2>SKILLS</h2>
        <hr/>
        <div class="container text-center">
          <div class="row row-cols-4 py-4">
            <div class="col"><img src={cpp} class="img-thumbnail p-2" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={azure} class="img-thumbnail p-2" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={Java} class="img-thumbnail p-2" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={Bitrix24} class="img-thumbnail p-2" width={100} height={100} alt="..."/></div>
          </div>
          <div class="row row-cols-4 py-4">
            <div class="col"><img src={mongodb} class="img-thumbnail p-2" width={100} height={100}alt="..."/></div>
            <div class="col"><img src={php} class="img-thumbnail p-2" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={reactjs} class="img-thumbnail p-2" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={sql} class="img-thumbnail p-2" width={100} height={100} alt="..."/></div>
          </div>  
          <div class="row row-cols-4 py-4">
            <div class="col"><img src={splunk} class="img-thumbnail" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={dsa} class="img-thumbnail" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={sdlc} class="img-thumbnail" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={git} class="img-thumbnail" width={100} height={100} alt="..."/></div>
          </div>
          {/* <div class="row row-cols-4 py-4">
            <div class="col"><img src={image1} class="img-thumbnail" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={image1} class="img-thumbnail" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={image1} class="img-thumbnail" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={image1} class="img-thumbnail" width={100} height={100} alt="..."/></div>
          </div> */}
          {/* <div class="row row-cols-4 py-4">
            <div class="col"><img src={image1} class="img-thumbnail" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={image1} class="img-thumbnail" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={image1} class="img-thumbnail" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={image1} class="img-thumbnail" width={100} height={100} alt="..."/></div>
          </div>
          <div class="row row-cols-4 py-4">
            <div class="col"><img src={image1} class="img-thumbnail" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={image1} class="img-thumbnail" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={image1} class="img-thumbnail" width={100} height={100} alt="..."/></div>
            <div class="col"><img src={image1} class="img-thumbnail" width={100} height={100} alt="..."/></div>
          </div> */}
        </div>

        {/* <p style={{ justifyItems: "center" }}>
          Hey, want to get your website built? <br /> Want to discuss about
          recruitment?
          <br/>
          Let's discuss here...
        </p> */}
        {/* <div class="container">
          <div class="row">
            <div class="col">
              <img src={image} />
            </div>
            <div class="col">
              <img src={image} />
            </div>
            <div class="col">
              <img src={image} />
            </div>
          </div> */}

        {/* <div class="container">
            <div class="row">
              <div class="col">
                <img src={image} />
              </div>
              <div class="col">
                <img src={image} />
              </div>
              <div class="col">
                <img src={image} />
              </div>
            </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
export default Skill;
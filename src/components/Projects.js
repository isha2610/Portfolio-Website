import React from "react";
// import { Link } from "react-router-dom";
import image from '../assets/vag-card-image.jpg';
import pawnshop from '../assets/pawn shop.jpg'
import extention from '../assets/chrome-extention.jpg';
import chatbot from '../assets/chatbot.jpg';

function Projects(){
  const linkStyles = {
    textDecoration: 'none', 
    color: 'inherit'
  }
    return(
  <div>
    <div class="page-header text-center p-4">
      <br/><h2>PORTFOLIO</h2><hr/><br/>
    </div>
    {/* projects here */}
<div class="row row-cols-1 row-cols-md-2"> 
  <div class="col p-4">
    <div class="card">
      <a href="https://github.com/isha2610"><img src={image} class="card-img-top" width={250} height={250} alt="vag-card-image"/></a>
      <div class="card-body" >
        <h5 class="card-title" className="margin: 0">Virtual Art Gallery</h5>
        <p class="card-text">A react app built with bootstrap which uploads and retrieves images and metadata using Java and Azure Blob Storage</p>
        <h6> <a href="" style={linkStyles}>Deployed </a> | <a href="https://github.com/isha2610/Virtual-Art-Gallery" style={linkStyles}>Github </a></h6>
      </div>
    </div>
  </div>
  <div class="col p-4">
    <div class="card">
    <a href="https://github.com/isha2610"><img src={pawnshop} class="card-img-top" width={250} height={250} alt="pawn-shop website"/></a>
      <div class="card-body">
        <h5 class="card-title">Pawn Shop Website</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <h6> <a href="" style={linkStyles}>Deployed </a> | <a href="https://github.com/isha2610/Pawn-Shop-Website" style={linkStyles}>Github </a></h6>
      </div>
    </div>
  </div>
  <div class="col p-4">
    <div class="card">
    <a href="https://github.com/isha2610"><img src={extention} class="card-img-top" width={250} height={300} alt="openai-chatbot"/></a>
      <div class="card-body">
        <h5 class="card-title">Pun Fun - A Chrome Extension</h5>
        <p class="card-text">A chrome extension built on CSS and JavaScript using third party API which fetches the required fields from JSON data and display them.</p>
        <h6> <a href="" style={linkStyles}>Deployed </a> | <a href="https://github.com/isha2610/Pawn-Shop-Website" style={linkStyles}>Github </a></h6>
      </div>
    </div>
  </div>
  <div class="col p-4">
    <div class="card">
    <a href="https://github.com/isha2610"><img src={chatbot} class="card-img-top" width={250} height={300} alt="dje-chr-ext"/></a>
      <div class="card-body">
      <h5 class="card-title">Chatbot</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <h6> <a href="" style={linkStyles}>Deployed </a> | <a href="https://github.com/isha2610/Pawn-Shop-Website" style={linkStyles}>Github </a></h6>
      </div>
    </div>
  </div>
</div>
<br/>
</div>
);
};
export default Projects;
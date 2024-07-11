import React from "react";
// import { Link } from "react-router-dom";

function Projects(){
    return(
  <div>
    <div class="page-header text-center p-4">
      <br/><h2>Portfolio</h2><hr/><br/>
    </div>
    {/* projects here */}
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="portfolio\public\vag-card-image.jpg" class="card-img-top" alt="vag-card-image"/>
      <div class="card-body">
        <h5 class="card-title">Virtual Art Gallery</h5>
        <p class="card-text">A react app built with bootstrap which uploads and retrieves images and metadata using Java and Azure Blob Storage</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./public/logo192.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Pawn Shop Website</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="openai-chatbot"/>
      <div class="card-body">
        <h5 class="card-title">Chatbot</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="dje-chr-ext"/>
      <div class="card-body">
        <h5 class="card-title">Pun Fun - A Chrome Extension</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</div>
</div>
);
};
export default Projects;
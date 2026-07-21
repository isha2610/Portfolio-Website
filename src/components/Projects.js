import React from "react";
// import { Link } from "react-router-dom";
import vag from '../assets/vag-card-image.jpg';
import pawnshop from '../assets/pawn shop.jpg'
import extention from '../assets/chrome-extention.jpg';
import chatbot from '../assets/chatbot.jpg';
import imageSlider from '../assets/image-slider.png';
import "./projects.css";

const featuredProjects = [
  {
    title: "Project One",
    category: "Backend System",
    summary:
      "Add a one-line description of the real problem this project solves.",
    problem:
      "Describe the user, business, or engineering problem that needed solving.",
    approach:
      "Describe the backend architecture, APIs, data flow, or key implementation approach.",
    decision:
      "Describe one meaningful technical, reliability, security, or performance decision.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
    repositoryUrl: "#",
    demoUrl: "",
  },
  {
    title: "Project Two",
    category: "Full-Stack Application",
    summary:
      "Add a short outcome-led description of this project.",
    problem:
      "Describe the practical problem or workflow you built this for.",
    approach:
      "Describe the system design, database work, integrations, or application flow.",
    decision:
      "Describe the hardest technical challenge and how you handled it.",
    tech: ["Java", "SQL", "Azure", "React"],
    repositoryUrl: "#",
    demoUrl: "",
  },
  {
    title: "Project Three",
    category: "Integration / Platform",
    summary:
      "Add a short description that makes the project worth opening.",
    problem:
      "Describe the problem, constraints, and intended users.",
    approach:
      "Describe the APIs, services, security model, or data-processing approach.",
    decision:
      "Describe one engineering trade-off or decision you are proud of.",
    tech: ["Spring Boot", "Oracle", "Git", "Monitoring"],
    repositoryUrl: "#",
    demoUrl: "",
  },
];

// My Projects

function Projects(){
  const linkStyles = {
    textDecoration: 'none', 
    color: 'inherit'
  }
    return(
  <div>
    <div class="page-header text-center p-4">
      <h2>PROJECTS</h2><hr/><br/>
    </div>
    <section className="featured-projects" aria-labelledby="featured-projects-heading">
  <div className="featured-projects__intro">
    <p className="featured-projects__eyebrow">Selected work</p>
    <h3 id="featured-projects-heading">Engineering case studies</h3>
    <p>
      A closer look at systems, integrations, and applications I have built.
    </p>
  </div>

  <div className="featured-projects__grid">
    {featuredProjects.map((project) => (
      <article className="featured-project-card" key={project.title}>
        <div className="featured-project-card__header">
          <p>{project.category}</p>
          <h4>{project.title}</h4>
        </div>

        <p className="featured-project-card__summary">{project.summary}</p>

        <div className="featured-project-card__details">
          <div>
            <h5>Problem</h5>
            <p>{project.problem}</p>
          </div>

          <div>
            <h5>Engineering approach</h5>
            <p>{project.approach}</p>
          </div>

          <div>
            <h5>Key decision</h5>
            <p>{project.decision}</p>
          </div>
        </div>

        <ul className="featured-project-card__tech">
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="featured-project-card__links">
          <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
            Repository →
          </a>

          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Live demo →
            </a>
          )}
        </div>
      </article>
    ))}
  </div>
</section>
    {/* projects here */}
<div class="row row-cols-1 row-cols-md-2"> 
  {/* Virtual Art Gallary */}
  <div class="col p-4">
    <div class="card">
      <a href="https://github.com/isha2610"><img src={vag} class="card-img-top" width={250} height={250} alt="vag-card-image"/></a>
      <div class="card-body" >
        <h5 class="card-title" className="margin: 0">Virtual Art Gallery</h5>
        <p class="card-text">A react app built with bootstrap which uploads and retrieves images and metadata using Java and Azure Blob Storage</p>
        <h6> <a href="/" style={linkStyles}>Deployed </a> | <a href="https://github.com/isha2610/Virtual-Art-Gallery" style={linkStyles}>Github </a></h6>
      </div>
    </div>
  </div>
  {/* Image Slider */}
  <div class="col p-4">
    <div class="card">
    <a href="https://github.com/isha2610"><img src={imageSlider} class="card-img-top" width={250} height={300} alt="image-slider"/></a>
      <div class="card-body">
        <h5 class="card-title">Image Slider - React JS *</h5>
        <p class="card-text">A chrome extension built on CSS and JavaScript using third party API which fetches the required fields from JSON data and display them.</p>
        <h6> <a href="/" style={linkStyles}>Deployed </a> | <a href="https://github.com/isha2610/" style={linkStyles}>Github </a></h6>
      </div>
    </div>
  </div>
  {/* Cruise Ship Management */}
  <div class="col p-4">
    <div class="card">
    <a href="https://github.com/isha2610"><img src={extention} class="card-img-top" width={250} height={300} alt="openai-chatbot"/></a>
      <div class="card-body">
        <h5 class="card-title">Cruise Ship Management</h5>
        <p class="card-text">A chrome extension built on CSS and JavaScript using third party API which fetches the required fields from JSON data and display them.</p>
        <h6> <a href="/" style={linkStyles}>Deployed </a> | <a href="https://github.com/isha2610/Pawn-Shop-Website" style={linkStyles}>Github </a></h6>
      </div>
    </div>
  </div>
  {/* Catering Reservation and Ordering System */}
  <div class="col p-4">
    <div class="card">
    <a href="https://github.com/isha2610"><img src={extention} class="card-img-top" width={250} height={300} alt="openai-chatbot"/></a>
      <div class="card-body">
        <h5 class="card-title">Catering Reservation and Ordering System</h5>
        <p class="card-text">A chrome extension built on CSS and JavaScript using third party API which fetches the required fields from JSON data and display them.</p>
        <h6> <a href="/" style={linkStyles}>Deployed </a> | <a href="https://github.com/isha2610/Pawn-Shop-Website" style={linkStyles}>Github </a></h6>
      </div>
    </div>
  </div>
  {/* Employee Record Management System */}
  <div class="col p-4">
    <div class="card">
    <a href="https://github.com/isha2610"><img src={extention} class="card-img-top" width={250} height={300} alt="openai-chatbot"/></a>
      <div class="card-body">
        <h5 class="card-title">Employee Record Management System</h5>
        <p class="card-text">A chrome extension built on CSS and JavaScript using third party API which fetches the required fields from JSON data and display them.</p>
        <h6> <a href="/" style={linkStyles}>Deployed </a> | <a href="https://github.com/isha2610/Pawn-Shop-Website" style={linkStyles}>Github </a></h6>
      </div>
    </div>
  </div>
  {/* Image Slider */}
  <div class="col p-4">
    <div class="card">
    <a href="https://github.com/isha2610"><img src={extention} class="card-img-top" width={250} height={300} alt="openai-chatbot"/></a>
      <div class="card-body">
        <h5 class="card-title">Image Slider</h5>
        <p class="card-text">A chrome extension built on CSS and JavaScript using third party API which fetches the required fields from JSON data and display them.</p>
        <h6> <a href="/" style={linkStyles}>Deployed </a> | <a href="https://github.com/isha2610/Pawn-Shop-Website" style={linkStyles}>Github </a></h6>
      </div>
    </div>
  </div>
  {/* Pawn Shop Website */}
  <div class="col p-4">
    <div class="card">
    <a href="https://github.com/isha2610"><img src={pawnshop} class="card-img-top" width={250} height={250} alt="pawn-shop website"/></a>
      <div class="card-body">
        <h5 class="card-title">Pawn Shop Website</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <h6> <a href="/" style={linkStyles}>Deployed </a> | <a href="https://github.com/isha2610/Pawn-Shop-Website" style={linkStyles}>Github </a></h6>
      </div>
    </div>
  </div>
  {/* Mail Connect */}
  <div class="col p-4">
    <div class="card">
    <a href="https://github.com/isha2610"><img src={pawnshop} class="card-img-top" width={250} height={250} alt="pawn-shop website"/></a>
      <div class="card-body">
        <h5 class="card-title">Mail Connect</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <h6> <a href="/" style={linkStyles}>Deployed </a> | <a href="https://github.com/isha2610/Pawn-Shop-Website" style={linkStyles}>Github </a></h6>
      </div>
    </div>
  </div>
  {/* Chrome Extension */}
  <div class="col p-4">
    <div class="card">
    <a href="https://github.com/isha2610"><img src={extention} class="card-img-top" width={250} height={300} alt="openai-chatbot"/></a>
      <div class="card-body">
        <h5 class="card-title">Pun Fun - A Chrome Extension</h5>
        <p class="card-text">A chrome extension built on CSS and JavaScript using third party API which fetches the required fields from JSON data and display them.</p>
        <h6> <a href="/" style={linkStyles}>Deployed </a> | <a href="https://github.com/isha2610/Pawn-Shop-Website" style={linkStyles}>Github </a></h6>
      </div>
    </div>
  </div>
  {/* Chatbot */}
  <div class="col p-4">
    <div class="card">
    <a href="https://github.com/isha2610"><img src={chatbot} class="card-img-top" width={250} height={300} alt="dje-chr-ext"/></a>
      <div class="card-body">
      <h5 class="card-title">Chatbot</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <h6> <a href="/" style={linkStyles}>Deployed </a> | <a href="https://github.com/isha2610/Pawn-Shop-Website" style={linkStyles}>Github </a></h6>
      </div>
    </div>
  </div>
</div>
<br/>
</div>
);
};
export default Projects;
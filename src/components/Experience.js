import React from "react";
// import {Link} from 'react-router-dom';

// Work Experience

function experience() {
  return (
    <div>
      <div class="page-header text-center p-4">
        <h2>EXPERIENCE</h2>
        <hr />
        <br />
      </div>
      <div className="container fluid p-4">
        <div className="d-flex">
          <div className="p-4">
            <div className="card border-light mb-2">
              <div class="card-header">Duck Creek Technologies</div>
              <div class="card-body">
                <h5 class="card-title">Software Engineer Intern</h5>
                <p class="card-text">
                  Developed a Java-based framework for enhanced log retention
                  and visibility which standardized logs and centralized them
                  over Splunk Cloud using Azure Event Hub. Refactored the
                  framework from synchronous streaming of logs to asynchronous
                  resulting the log streaming in one-fifth time. Created
                  tailored alerts and notifications, resulting in reduced
                  incident response time Performed Junit Testing of the
                  framework Used React JS and Bootstrap to create the Art
                  Gallery Web App.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div class="card border-light mb-2">
              <div class="card-header">Unified Mentor</div>
              <div class="card-body">
                <h5 class="card-title">Full Stack Development Intern</h5>
                <p class="card-text">
                  React Image Slider: Developed a customizable image slider in
                  React with smooth transitions and auto play. Chat Application:
                  Built a real-time chat platform with session management and
                  chat rooms for seamless communication. Catering Reservation &
                  Ordering System: Created a full-stack catering platform with
                  online reservations and payment integration. Secure & Share
                  Govt Document: Implemented a secure document-sharing platform
                  with role-based access.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="p-4">
            <div class="card border-light mb-2">
              <div class="card-header">Corporate Intellect Solutions</div>
              <div class="card-body">
                <h5 class="card-title">System Engineer Trainee</h5>
                <p class="card-text">
                  Integrated Bitrix24 with Busy API to enhance workflow
                  automation, and synchronize data for seamless business
                  operations. Automated Proof of Concepts (POCs) to demonstrate
                  CRM functionalities to clients. Built a Real Estate Commission
                  Calculator POC, enabling clients to efficiently calculate and
                  manage commission distribution between the company and agents.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div class="card border-light mb-2">
              <div class="card-header">Corporate Intellect Solutions</div>
              <div class="card-body">
                <h5 class="card-title">System Engineer</h5>
                <p class="card-text">
                  Integrated Bitrix24 with Busy API to enhance workflow
                  automation, and synchronize data for seamless business
                  operations. Automated Proof of Concepts (POCs) to demonstrate
                  CRM functionalities to clients. Built a Real Estate Commission
                  Calculator POC, enabling clients to efficiently calculate and
                  manage commission distribution between the company and agents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default experience;

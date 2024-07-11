import React from "react";

function contact(){
    return(
    <div>
        <div class="page-header text-center p-4">
          <br/><h2>Contact Me</h2><hr/><br/>
          <p style={{justifyItems:"center"}}>Hey, want to get your website built? <br/> Want to discuss about recruitment?<br/>Let's discuss here...</p>
        </div>
      <div class="container-fluid d-flex justify-content-center">
        <div className="container-fluid d-flex justify-content-center flex-column align-items-center w-100">
          <form style={{ paddingTop: 20 }} className="w-25">
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input type="text" class="form-control" placeholder="John Doe" required style={{ paddingRight: 100 }}/>
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" placeholder="example@example.com" required style={{ paddingRight: 100 }}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Your Message</label>
              <textarea type="text" class="form-control" placeholder="Your message here..." required style={{ paddingRight: 100 }}
              />
            </div>
            <button type="submit" class="btn btn-secondary"> Send Email </button>
          </form>
        </div>
      </div>
    </div>
    );
};
export default contact;
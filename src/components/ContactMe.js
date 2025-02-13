import React from "react";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {Link} from 'react-router-dom';

// service id - service_o8ukegq
// service_o8ukegq

// Email Connect

const ContactMe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };
    
    return(
    <div>
        <div class="page-header text-center p-4">
          <br/><br/><h2>CONTACT ME</h2><hr/><br/>
          <p style={{justifyItems:"center"}}>Hey..! Would love to know more or have any feedback. Let's connect..!</p>
        </div>
      <div class="container-fluid d-flex justify-content-center">
        <div className="container-fluid d-flex justify-content-center flex-column align-items-center w-100">
          <form style={{ paddingTop: 20 }} className="w-25" onSubmit={sendEmail}>
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
            <button type="submit" value="send" class="btn btn-secondary" disabled={isSubmitting}> Send Email </button>
            {stateMessage && <p>{stateMessage}</p>}
          </form>
        </div>
      </div>
    </div>
    );
};
export default ContactMe;
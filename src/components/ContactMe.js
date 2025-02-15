import React from "react";
// import { useState } from 'react';
import emailjs from '@emailjs/browser';
// import Swal from "sweetalert2";
// import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
// import "./App.css";
import Swal from "sweetalert2";

// service id - service_o8ukegq
// service_o8ukegq

// Email Connect

const SERVICE_ID = "service_o8ukegq";
const TEMPLATE_ID = "template_zg0gyqi";
const PUBLIC_KEY = "_4lh9OUJLl7Y1YLTt";

const ContactMe = () => {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    e.target.reset()
  };
/*
  return (
    <div className="App">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <Button type="submit" color="green">Submit</Button>
      </Form>
    </div>
  );




  /*
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
    */


    return(
    <div>
        <div class="page-header text-center p-4">
          <h2>CONTACT ME</h2><hr/>
          <p style={{justifyItems:"center"}}>Hey..! Would love to know more or have any feedback. Let's connect..!</p>
        </div>
      <div class="container-fluid d-flex justify-content-center">
        <div className="container-fluid d-flex justify-content-center flex-column align-items-center w-100">
          <form style={{ paddingTop: 20 }} className="w-25" onSubmit={handleOnSubmit}>
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
            <button type="submit" value="send" class="btn btn-secondary" > Send Email </button>
            {/* {stateMessage && <p>{stateMessage}</p>} disabled={isSubmitting} */} 
          </form>
        </div>
      </div>
    </div>
    );
    
};
export default ContactMe;
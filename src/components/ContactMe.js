import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Coffee, Mail, Send } from "lucide-react";
import "./contact.css";

const SERVICE_ID = "service_o8ukegq";
const TEMPLATE_ID = "template_zg0gyqi";
const PUBLIC_KEY = "_4lh9OUJLl7YLTt";

const ContactMe = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, event.target, PUBLIC_KEY)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message sent successfully",
        });

        event.target.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: error.text,
        });
      });
  };

  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-section__intro">
        <p className="contact-section__eyebrow">Get in touch</p>

        <h2 id="contact-heading">Let&apos;s connect</h2>

        <p>
          Have an engineering opportunity, a collaboration idea, or feedback to
          share? I&apos;d be happy to hear from you.
        </p>
      </div>

      <div className="contact-section__grid">
        <div className="contact-section__details">
          <a
            className="contact-email"
            href="mailto:khuranaisha00@gmail.com"
          >
            <Mail size={20} aria-hidden="true" />
            khuranaisha00@gmail.com
          </a>

          <div className="coffee-chat">
            <span className="coffee-chat__icon" aria-hidden="true">
              <Coffee size={22} />
            </span>

            <div>
              <h3>Coffee chat?</h3>
              <p>
                Open to thoughtful engineering conversations, collaboration,
                and a good cup of coffee.
              </p>

              <a
                href="mailto:khuranaisha00@gmail.com?subject=Coffee%20chat%20with%20Isha"
              >
                Let&apos;s grab a virtual coffee →
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleOnSubmit}>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="user_name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />

          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="user_email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="user_message"
            rows="5"
            placeholder="What would you like to discuss?"
            required
          />

          <button type="submit">
            Send message
            <Send size={17} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
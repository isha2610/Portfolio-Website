import { motion, useReducedMotion } from "framer-motion";
import "./experience.css";

const experiences = [
  {
    company: "Duck Creek Technologies",
    role: "Software Engineer Intern",
    focus: "Java, Azure Event Hubs, Splunk Cloud, JUnit",
    highlights: [
      "Developed a Java-based framework to standardize log retention and improve visibility through Splunk Cloud.",
      "Refactored synchronous log streaming to asynchronous processing, reducing streaming time to one-fifth.",
      "Created tailored alerts and notifications to support faster incident response.",
      "Added JUnit coverage for the framework and contributed to an Art Gallery web application.",
    ],
  },
  {
    company: "Corporate Intellect Solutions",
    role: "System Engineer",
    focus: "Bitrix24, Busy API, workflow automation",
    highlights: [
      "Integrated Bitrix24 with the Busy API to synchronize data and improve business workflows.",
      "Automated proof-of-concept implementations to demonstrate CRM functionality to clients.",
      "Built a real-estate commission calculator proof of concept for managing company and agent distributions.",
    ],
  },
  {
    company: "Unified Mentor",
    role: "Full Stack Development Intern",
    focus: "React, APIs, authentication, role-based access",
    highlights: [
      "Built a real-time chat application with session management and chat rooms.",
      "Developed a catering reservation and ordering platform with payment integration.",
      "Implemented a secure document-sharing platform with role-based access.",
    ],
  },
];

function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="experience-section" aria-labelledby="experience-heading">
      <div className="experience-section__intro">
        <p className="experience-section__eyebrow">Career journey</p>
        <h2 id="experience-heading">Experience building practical software</h2>
        <p>
          Roles where I worked on integrations, application features,
          observability, and production-focused engineering problems.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <motion.article
            className="experience-item"
            key={`${experience.company}-${experience.role}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <span className="experience-item__marker" aria-hidden="true" />

            <div className="experience-item__content">
              <p className="experience-item__company">{experience.company}</p>
              <h3>{experience.role}</h3>
              <p className="experience-item__focus">{experience.focus}</p>

              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
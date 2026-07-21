import {
  Activity,
  Code2,
  Database,
  GitBranch,
  Network,
  Server,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import "./skills.css";

const skillGroups = [
  {
    title: "Backend Engineering",
    icon: Server,
    skills: ["Spring Boot", "Microservices", "REST APIs"],
  },
  {
    title: "Data Platforms",
    icon: Database,
    skills: ["SQL", "Oracle", "PostgreSQL"],
  },
  {
    title: "Observability",
    icon: Activity,
    skills: ["Splunk Cloud", "Logging", "Monitoring"],
  },
  {
    title: "Engineering Practices",
    icon: Network,
    skills: ["System Design", "Data Structures & Algorithms"],
  },
  {
    title: "Developer Workflow",
    icon: GitBranch,
    skills: ["Git", "GitHub"],
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "C++"],
  },
];

function Skill() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="skills-section" aria-labelledby="skills-heading">
      <div className="skills-section__intro">
        <p className="skills-section__eyebrow">Engineering toolkit</p>

        <h2 id="skills-heading">
          Technologies I use to build production systems
        </h2>

        <p className="skills-section__description">
          Developed through shipping software, debugging failures, and improving
          real-world systems.
        </p>
      </div>

      <div className="skills-section__grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.article
              className="skill-card"
              key={group.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
            >
              <span className="skill-card__icon" aria-hidden="true">
                <Icon size={20} strokeWidth={1.8} />
              </span>

              <h3>{group.title}</h3>

              <ul className="skill-card__list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Skill;
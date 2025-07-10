import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="job">
        <h3>Software Engineer – Cybage Software</h3>
        <span>Nov 2023 – Present</span>
        <ul>
          <li>
            Developed and optimized enterprise-grade applications using
            <strong> React, Vue.js, Angular, Node.js, MongoDB, SQL</strong>, and <strong>Ruby on Rails</strong>,
            delivering scalable and modular features for internal and client-facing tools.
          </li>
          <li>
            Integrated 15+ <strong>RESTful APIs</strong> to support microservices communication,
            ensuring real-time, secure data operations across modules.
          </li>
          <li>
            Improved overall performance by <strong>30%</strong> through lazy loading, route-based chunking,
            and UI component optimization.
          </li>
          <li>
            Built reusable UI libraries and implemented <strong>CI/CD pipelines</strong> using GitLab,
            reducing deployment time and ensuring consistent release cycles.
          </li>
          <li>
            Designed and maintained <strong>responsive, cross-browser UIs</strong> using SCSS, Tailwind CSS,
            and best accessibility practices.
          </li>
          <li>
            Collaborated with cross-functional teams in <strong>Agile/Scrum environments</strong>,
            actively contributing to sprint planning, daily standups, and retrospectives.
          </li>
          <li>
            Developed admin dashboards, <strong>authentication modules</strong>, and
            <strong>role-based access control (RBAC)</strong> for secure platform access and content moderation.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        <div>
          <h3>📄Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Ruby</li>
          </ul>
        </div>
        <div>
          <h3>💻Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>Angular</li>
            <li>Vue.js</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </div>
        <div>
          <h3>⚙️Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Ruby on Rails</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
        <div>
          <h3>🗃️Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </div>
        <div>
          <h3>🛠️Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Jira</li>
            <li>Confluence</li>
          </ul>
        </div>
      </div>

      <h2>🤝 Soft Skills</h2>
      <div className="soft-skills">
        <span>Problem Solving</span>
        <span>Critical Thinking</span>
        <span>Leadership</span>
        <span>Teamwork</span>
        <span>Time Management</span>
        <span>Communication</span>
        <span>Adaptability</span>
      </div>
    </section>
  );
}

export default Skills;

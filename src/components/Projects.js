// === Projects.js ===
import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "AutoTradeHub",
      image: "/images/autotradehub.png",
      description: "E-commerce platform for buying/selling automobiles with secure payments and admin tools.",
      tech: "Angular, Node.js, MongoDB, Razorpay",
      link: "https://github.com/yourusername/autotradehub"
    },
    {
      title: "ClixVerse",
      image: "/images/clixverse.png",
      description: "Image-sharing social media site with user roles, moderation, and Turbo Frames.",
      tech: "Ruby on Rails, Turbo, SCSS",
      link: "https://github.com/yourusername/clixverse"
    },
    {
      title: "BookStore",
      image: "/images/ezyridez.png",
      description: "Book store platform",
      tech: "HTML, CSS, JS, Firebase",
      link: "https://github.com/yourusername/ezyridez"
    },
    {
      title: "Github Guide",
      image: "/images/resume-generator.png",
      description: "Web app that creates AI-generated resumes and cover letters using OpenAI.",
      tech: "React , CSS",
      link: "https://github.com/yourusername/resume-generator"
    },
     {
      title: "Travel Webapp",
      image: "/images/resume-generator.png",
      description: "Web app that can book destinations",
      tech: "React, OpenAI API, CSS",
      link: "https://github.com/yourusername/resume-generator"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, i) => (
          <a
            href={project.link}
            key={i}
            className="project-card"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project.image} alt={project.title} />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.tech}</small>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
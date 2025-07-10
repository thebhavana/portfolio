import React from 'react';
import './Home.css';

function Home() {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <div className="home-image">
                    <img src="bhawana.jpg" alt="Bhawana Kumar" />
                </div>
                <div className="home-text">
                    <h1>Hi, I’m Bhawana Kumar 👋</h1>
                    <p>
                        I’m a <strong>Full Stack Software Engineer</strong> with <strong>~2 years of experience</strong> in building scalable, user-focused web applications. Currently working at <strong>Cybage</strong>, I’ve contributed to full-stack enterprise platforms using technologies like <strong>React, Angular, Vue, Node.js, Ruby on Rails, Python, SQL</strong>, and <strong>MongoDB</strong>.
                        <br /><br />
                        My work focuses on delivering <strong>clean, responsive UIs</strong> and optimizing performance through modern development practices. I’m also certified by <strong>Meta as a Front-End Developer</strong> and have been recognized for my <strong>technical writing, open-source contributions</strong>, and <strong>published research</strong>.
                        <br /><br />
                        I’ve led <strong>UI development</strong> for enterprise dashboards, implemented <strong>RESTful API integrations</strong>, and collaborated across <strong>Agile teams</strong> to deliver robust solutions. Outside of work, I’ve won <strong> chess championships</strong> and enjoy blending creativity and strategy in both code and life.
                        <br /><br />
                        I’m actively exploring <strong>high-impact roles</strong> where I can contribute to <strong>innovative product teams</strong>, grow alongside top talent, and build <strong>technology that makes a difference</strong>.
                    </p>

                    <div className="home-buttons">
                        <a href="#projects" className="btn">🚀 Explore My projects</a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Home;
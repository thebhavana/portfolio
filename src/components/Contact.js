import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inline">
        📧 <a href="mailto:bhawanakumar5@gmail.com">bhawanakumar5@gmail.com</a> &nbsp;|&nbsp;
        🔗 <a href="https://linkedin.com/in/bhawana-kumar" target="_blank" rel="noreferrer">LinkedIn</a> &nbsp;|&nbsp;
        💻 <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <p className="footer-note">© {new Date().getFullYear()} Bhawana Kumar — Built with ❤️</p>
    </footer>
  );
}

export default Contact;

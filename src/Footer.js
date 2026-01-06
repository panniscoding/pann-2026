import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Column */}
        <div className="footer-column">
          <h3>Pann Ei Phyu</h3>
          <p className="footer-description">
            Junior Developer specializing in full-stack development. Turning
            hospitality excellence into elegant code solutions.
          </p>
          <div className="footer-social">
            <a
              href="https://github.com/panniscoding/pann-2026"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
            >
              <img src="/images/github.png" alt="GitHub" width="32" />
            </a>
            <a
              href="https://www.linkedin.com/in/pann-ei-phyu-849916b0/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <img src="/images/linkedin.png" alt="LinkedIn" width="32" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="/Pann Ei Phyu.pdf" target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="footer-column">
          <h4>Tech Stack</h4>
          <ul className="footer-links">
            <li>React & JavaScript</li>
            <li>HTML5 & CSS3</li>
            <li>Python & Java</li>
            <li>Node.js & PHP</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Get In Touch</h4>
          <ul className="footer-contact">
            <li>
              <a href="mailto:panneiphyu.ms@gmail.com">
                📧 panneiphyu.ms@gmail.com
              </a>
            </li>
            <li>📍 Amsterdam, Netherlands</li>
            <li>
              <a
                href="https://www.shecodes.io/graduates/20032-pann-ei-phyu"
                target="_blank"
                rel="noreferrer noopener"
              >
                🎓 SheCode Certificates
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {currentYear} Pann Ei Phyu. Built with React ⚛️ & 🖤</p>
        <p className="footer-credits">
          Hosted on{" "}
          <a
            href="https://pann-portfolio-2025.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Netlify
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/panniscoding/pann-2026"
            target="_blank"
            rel="noreferrer noopener"
          >
            Open Source on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <main>
      <section className="hero container">
        <div className="hero-blue">
          <div>
            <h1>
              <small>Hi I'm</small>
              Pann 🌸,
            </h1>
            <p>
              Junior Developer with a unique blend of technical and high-end
              hospitality experience. I specialize in creating efficient,
              scalable solutions that prioritize client needs and user
              experience. When I'm not coding, you'll find me enjoying the hoppy
              bitterness of a good Guinness 🖤
            </p>
            <div className="call-to-action">
              <a
                href="/Pann Ei Phyu.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="button black"
              >
                View Resume
              </a>
              <a
                href="mailto:panneiphyu.ms@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
                className="button white"
              >
                Contact Me
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/panniscoding/pann-2026"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="./images/github.png" alt="GitHub" width="48" />
              </a>
              <a
                href="https://www.linkedin.com/in/pann-ei-phyu-849916b0/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="./images/linkedin.png" alt="LinkedIn" width="48" />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-yellow">
          <img src="/images/pann.png" alt="Pann" width="100%" />
        </div>
      </section>
      <section className="logos container">
        <div className="marquee">
          <div className="track">
            <img src="/images/html.png" alt="HTML" width="128" />
            <img src="/images/css.png" alt="CSS" width="128" />
            <img src="/images/javascript.png" alt="JS" width="128" />
            <img src="/images/react.png" width="128" alt="React" />
            <img src="/images/vscode.png" width="128" alt="VS Code" />
            <img src="/images/python.png" width="128" alt="Python" />
            <img src="/images/seo.png" alt="SEO" width="128" />
            <img src="/images/icon-AI.png" alt="AI" width="128" />
            <img src="/images/html.png" alt="HTML" width="128" />
            <img src="/images/css.png" alt="CSS" width="128" />
            <img src="/images/javascript.png" alt="JS" width="128" />
            <img src="/images/react.png" width="128" alt="React" />
            <img src="/images/vscode.png" width="128" alt="VS Code" />
            <img src="/images/python.png" width="128" alt="Python" />
            <img src="/images/seo.png" alt="SEO" width="128" />
            <img src="/images/icon-AI.png" alt="AI" width="128" />
          </div>
        </div>
      </section>
      <section id="skills" className="skills container">
        <h2>
          <small> About Me</small>
          Skills
        </h2>
        <div className="holder-blue">
          <div className="left-column">
            <h3>Frontend</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>GIT</li>
              <li>Responsive</li>
              <li>SEO</li>
              <li>AJAX/API</li>
            </ul>
            <h3>Backend</h3>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>Node.js</li>
              <li>PHP</li>
            </ul>
          </div>
          <div className="right-column">
            <h3>Get to know me a bit</h3>
            <p>
              I'm a career-changing Junior Developer with 15 years of
              hospitality management experience, now channeling my passion for
              problem-solving into full-stack development. My decade managing
              high-end operations taught me to build efficient systems under
              pressure, anticipate user needs, and lead diverse teams through
              complex challenges.
            </p>
            <p>
              Currently working as Personal Assistant at a branding consultancy
              and Financial Controller at the Fashion Store while dedicating
              every available hour to mastering my technical skills across the
              entire stack. Now seeking to leverage technical proficiency and
              CRM strategy to optimize customer retention and lifecycle
              automation for a high-growth SaaS platform.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

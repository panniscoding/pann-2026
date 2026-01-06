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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import { personal } from "../data";

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="eyebrow">SENIOR FULL STACK DEVELOPER</p>

        <h1>
          Building digital
          <br />
          <span>experiences</span> that matter.
        </h1>

        <p className="hero-description">
          I'm {personal.name} — a {personal.role} specializing in React, React
          Native, Node.js, Azure and AI-powered applications.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            View My Work →
          </a>

          <a href="#contact" className="secondary-button">
            Get In Touch
          </a>
        </div>

        <div className="social-links">
          <a href={personal.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>

          <a href={`mailto:${personal.email}`}>Email ↗</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-window">
          <div className="window-header">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>

            <span>tejas.tsx</span>
          </div>

          <div className="code-content">
            <p>
              <span className="purple">const</span>{" "}
              <span className="blue">developer</span> = {"{"}
            </p>

            <p className="indent">
              name: <span className="green">"{personal.name}"</span>,
            </p>

            <p className="indent">
              role: <span className="green">"{personal.role}"</span>,
            </p>

            <p className="indent">
              experience:{" "}
              <span className="orange">"{personal.experience}"</span>,
            </p>

            <p className="indent">
              frontend: <span className="green">"React"</span>,
            </p>

            <p className="indent">
              mobile: <span className="green">"React Native"</span>,
            </p>

            <p className="indent">
              backend: <span className="green">"Node.js"</span>,
            </p>

            <p className="indent">
              cloud: <span className="green">"Azure"</span>,
            </p>

            <p className="indent">
              ai: <span className="green">true</span>,
            </p>

            <p>{"};"}</p>
          </div>
        </div>

        <div className="floating-card card-one">
          <strong>React</strong>
          <span>Frontend</span>
        </div>

        <div className="floating-card card-two">
          <strong>Azure</strong>
          <span>Cloud</span>
        </div>

        <div className="floating-card card-three">
          <strong>AI</strong>
          <span>Innovation</span>
        </div>
      </div>
    </section>
  );
}

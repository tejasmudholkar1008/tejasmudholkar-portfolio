import "./App.css";
import {
  Contact,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
  Stats,
} from "./components";
import { experience } from "./data";

function App() {
  return (
    <div className="portfolio">
      <Header />
      <main>
        <Hero />
        <Stats />
        {/* ABOUT */}
        <section id="about" className="section about-section">
          <div className="section-heading">
            <p className="eyebrow">01 — ABOUT ME</p>
            <h2>
              Engineering with
              <br />
              <span>purpose.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="large-text">
              I am a Senior Full Stack Developer with 7+ years of experience
              building enterprise-grade web and mobile applications.
            </p>

            <p>
              My expertise spans modern frontend architecture, backend services,
              cloud-native applications, AI-powered experiences and secure
              software engineering.
            </p>

            <p>
              I enjoy solving complex engineering problems, designing reusable
              systems and helping teams deliver reliable, production-ready
              software.
            </p>

            <div className="about-tags">
              <span>Problem Solver</span>
              <span>Technical Leader</span>
              <span>Mentor</span>
              <span>Architecture</span>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">02 — EXPERIENCE</p>
            <h2>
              My professional
              <br />
              <span>journey.</span>
            </h2>
          </div>

          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-item" key={item.company}>
                <div className="experience-number">0{index + 1}</div>

                <div className="experience-main">
                  <div className="experience-top">
                    <div>
                      <h3>{item.company}</h3>
                      <p className="role">{item.role}</p>
                    </div>

                    <div className="experience-meta">
                      <span>{item.period}</span>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="experience-description">{item.description}</p>

                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="tech-list">
                    {item.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

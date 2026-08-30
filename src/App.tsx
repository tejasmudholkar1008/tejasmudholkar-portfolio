import "./App.css";
import { Footer, Header, Hero, Stats } from "./components";
import { experience, projects, skills, personal } from "./data";

function App() {
  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <Header />

      {/* HERO */}
      <main>
        <Hero />

        {/* STATS */}
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

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <p className="eyebrow">03 — SELECTED WORK</p>
            <h2>
              Projects I've
              <br />
              <span>worked on.</span>
            </h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>

                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-arrow">↗</div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <p className="eyebrow">04 — TECHNOLOGY</p>
            <h2>
              Tools I use to
              <br />
              <span>build things.</span>
            </h2>
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-category" key={category}>
                <h3>{category}</h3>

                <div className="skill-items">
                  {items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <p className="eyebrow">05 — CONTACT</p>

          <h2>
            Let's build
            <br />
            something <span>great.</span>
          </h2>

          <p>
            Have an interesting project, opportunity or simply want to connect?
            My inbox is always open.
          </p>

          <a href={`mailto:${personal.email}`} className="contact-email">
            {personal.email} ↗
          </a>

          <div className="contact-links">
            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href={`tel:${personal.phone}`}>{personal.phone}</a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;

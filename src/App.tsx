import "./App.css";

const skills = {
  Frontend: [
    "React.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Redux",
    "Redux Persist",
    "Context API",
    "HTML5",
    "CSS3",
    "SCSS",
    "Tailwind CSS",
    "Micro Frontends",
    "Module Federation",
    "Webpack",
    "Vite",
    "Web Workers",
  ],

  Backend: [
    "Node.js",
    "Express.js",
    ".NET Core Web API",
    "REST APIs",
    "WebSockets",
    "MVC Architecture",
  ],

  Cloud: [
    "Microsoft Azure",
    "AKS",
    "Docker",
    "Kubernetes",
    "Rancher",
    "GitHub Actions",
    "Jenkins",
    "Octopus Deploy",
    "CI/CD",
  ],

  Security: [
    "OAuth 2.0",
    "OIDC",
    "JWT",
    "RBAC",
    "SSO",
    "Kong Gateway",
    "Session Management",
  ],

  AI: [
    "Generative AI",
    "AI Chatbots",
    "Prompt Engineering",
    "Conversational UI",
    "Workflow Automation",
    "RAG Concepts",
    "Streaming AI",
    "GitHub Copilot",
  ],

  Database: ["PostgreSQL", "MySQL"],
};

const experience = [
  {
    company: "Barclays",
    role: "Senior Software Engineer",
    period: "Jun 2026 — Present",
    location: "Pune, India",
    description:
      "Building secure mobile and web applications for Barclays UK Banking using React Native, React.js, TypeScript and Node.js.",
    points: [
      "Develop secure banking applications using React Native and React.js.",
      "Build reusable UI components and integrate REST APIs.",
      "Implement OAuth 2.0, OIDC, JWT and RBAC authentication flows.",
      "Deploy applications on Microsoft Azure using GitHub Actions CI/CD.",
      "Optimize applications using lazy loading, code splitting and caching.",
      "Participate in architecture reviews, code reviews and production releases.",
    ],
    tech: [
      "React Native",
      "React.js",
      "TypeScript",
      "Node.js",
      "Azure",
      "OAuth2",
    ],
  },
  {
    company: "Honeywell Technology Solutions",
    role: "Software Engineer II / Mobile Developer II",
    period: "Mar 2022 — Jun 2026",
    location: "Bangalore, India",
    description:
      "Led frontend, backend and mobile engineering initiatives across enterprise products and AI-powered applications.",
    points: [
      "Led end-to-end design and delivery of complex full stack solutions.",
      "Built applications using React.js, React Native, Node.js, Express.js and .NET Core.",
      "Designed real-time systems using WebSockets.",
      "Architected reusable components and Micro Frontend solutions.",
      "Built and optimized iOS and Android applications.",
      "Implemented deep linking, SSO and RBAC authorization flows.",
      "Containerized services using Docker and Kubernetes.",
      "Worked with Azure, GitHub Actions, Jenkins and Octopus Deploy.",
      "Mentored developers and conducted code reviews.",
      "Integrated AI APIs for automation, summarization and smart assistance.",
    ],
    tech: [
      "React",
      "React Native",
      "Node.js",
      ".NET",
      "Azure",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    company: "Capgemini",
    role: "Senior Analyst",
    period: "Feb 2019 — Mar 2022",
    location: "Pune, India",
    description:
      "Developed scalable retail, e-commerce and enterprise web/mobile applications.",
    points: [
      "Developed retail and e-commerce applications using React.js and React Native.",
      "Built secure REST APIs using Node.js and .NET.",
      "Managed application state using Redux and Redux Persist.",
      "Worked with PostgreSQL and MySQL databases.",
      "Delivered scalable frontend solutions for customer-facing platforms.",
      "Worked with globally distributed Agile teams.",
    ],
    tech: [
      "React.js",
      "React Native",
      "Node.js",
      ".NET",
      "Redux",
      "PostgreSQL",
    ],
  },
];

const projects = [
  {
    title: "Barclays UK Banking",
    category: "Banking • Mobile • Web",
    description:
      "Secure mobile and web banking applications with authentication, authorization and cloud-native delivery.",
    tech: [
      "React Native",
      "React",
      "TypeScript",
      "Node.js",
      "Azure",
      "OAuth2",
      "OIDC",
    ],
  },
  {
    title: "BMS Assist AI",
    category: "AI • Enterprise • Real-time",
    description:
      "AI-powered conversational application with streaming responses, WebSockets, Micro Frontends and secure session management.",
    tech: [
      "React",
      "Node.js",
      ".NET",
      "Azure",
      "WebSockets",
      "Kubernetes",
      "Rancher",
    ],
  },
  {
    title: "Honeywell Forge",
    category: "Enterprise • Industrial",
    description:
      "Enterprise platform supporting industrial workflows, asset health, workforce productivity and operational management.",
    tech: ["React", "React Native", "TypeScript", "Redux", "Node.js", "Azure"],
  },
  {
    title: "Honeywell Site Onboarding",
    category: "Enterprise • Workflow",
    description:
      "Scalable onboarding workflows and API integrations for industrial sites.",
    tech: ["React", "React Native", "Node.js", ".NET", "Azure", "Docker"],
  },
  {
    title: "Retail E-Commerce Platform",
    category: "E-Commerce • Mobile • Web",
    description:
      "Cross-platform retail commerce application supporting web and mobile users.",
    tech: ["React", "React Native", "Node.js", "REST APIs"],
  },
];

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "3", label: "Enterprise Companies" },
  { value: "15+", label: "Technologies" },
  { value: "10+", label: "Enterprise Projects" },
];

function App() {
  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo">
          TM<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="mailto:mudholkartejas1111@gmail.com" className="nav-button">
          Let's Talk
        </a>
      </header>

      {/* HERO */}
      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <p className="eyebrow">SENIOR FULL STACK DEVELOPER</p>

            <h1>
              Building digital
              <br />
              <span>experiences</span> that matter.
            </h1>

            <p className="hero-description">
              I'm Tejas Mudholkar — a Senior Full Stack Developer specializing
              in React, React Native, Node.js, Azure and AI-powered
              applications.
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
              <a
                href="https://linkedin.com/in/tejas-mudholkar"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:mudholkartejas1111@gmail.com">Email ↗</a>
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
                  name: <span className="green">"Tejas Mudholkar"</span>,
                </p>

                <p className="indent">
                  role: <span className="green">"Senior Full Stack"</span>,
                </p>

                <p className="indent">
                  experience: <span className="orange">"7+ years"</span>,
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

        {/* STATS */}
        <section className="stats-section">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

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

          <a
            href="mailto:mudholkartejas1111@gmail.com"
            className="contact-email"
          >
            mudholkartejas1111@gmail.com ↗
          </a>

          <div className="contact-links">
            <a
              href="https://linkedin.com/in/tejas-mudholkar"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="tel:+919922612599">+91 99226 12599</a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div>
          <strong>TM.</strong>
          <span>© {new Date().getFullYear()} Tejas Mudholkar</span>
        </div>

        <span>Designed & built with React</span>
      </footer>
    </div>
  );
}

export default App;

import { projects } from "../data";

export function Projects() {
  return (
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
  );
}

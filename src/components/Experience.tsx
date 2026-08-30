import { experience } from "../data";

export function Experience() {
  return (
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
  );
}

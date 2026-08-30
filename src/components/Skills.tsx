import { skills } from "../data";

export function Skills() {
  return (
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
  );
}

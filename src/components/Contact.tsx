import { personal } from "../data";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <p className="eyebrow">05 — CONTACT</p>

      <h2>
        Let's build
        <br />
        something <span>great.</span>
      </h2>

      <p>
        Have an interesting project, opportunity or simply want to connect? My
        inbox is always open.
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
  );
}

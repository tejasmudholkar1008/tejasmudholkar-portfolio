import { personal } from "../data";

export function Header() {
  return (
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

      <a href={`mailto:${personal.email}`} className="nav-button">
        Let's Talk
      </a>
    </header>
  );
}

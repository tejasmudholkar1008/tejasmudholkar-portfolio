import "./Header.css";
import { personal } from "../../data";
import { useTheme } from "../../context/ThemeContext";

export function Header() {
  const { theme, toggleTheme } = useTheme();
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

      <div className="nav-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          <span className="theme-icon">{theme === "dark" ? "☀" : "☾"}</span>
        </button>
      </div>

      <a href={`mailto:${personal.email}`} className="nav-button">
        Let's Talk
      </a>
    </header>
  );
}

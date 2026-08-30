import { personal } from "../data";

export function Footer() {
  return (
    <footer>
      <div>
        <strong>TM.</strong>

        <span>
          © {new Date().getFullYear()} {personal.name}
        </span>
      </div>

      <span>Designed & built with React</span>
    </footer>
  );
}

import { useLenis } from "lenis/react";

export function Header() {
  const lenis = useLenis();

  return (
    <header className="fixed top-0 bottom-auto w-full bg-transparent p-5 z-50">
      <nav className="container mx-auto flex justify-between">
        <h1>&gt; VERSION 1.1</h1>
        <ul className="lg:flex items-center space-x-7">
          <li>
            <button type="button" onClick={() => lenis?.scrollTo("#hero")}>
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => lenis?.scrollTo("#experience")}
            >
              Experience
            </button>
          </li>
          <li>
            <button type="button" onClick={() => lenis?.scrollTo("#projects")}>
              Projects
            </button>
          </li>
          <li>
            <button type="button" onClick={() => lenis?.scrollTo("#contact")}>
              Contact
            </button>
          </li>
        </ul>
        <div>
          <a
            href="/src/assets/docs/curriculo_victor_lima_2025.pdf"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

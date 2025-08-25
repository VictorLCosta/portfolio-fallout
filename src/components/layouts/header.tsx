import { NavLink } from "react-router";

import { TextHoverEffect } from "../ui/text-hover-effect";

export function Header() {
  return (
    <header className="fixed top-0 bottom-auto w-full bg-transparent p-4 z-50 border-b border-b-electric-green">
      <nav className="container mx-auto flex justify-between">
        <h1>&gt; VERSION 1.1</h1>
        <ul className="lg:flex items-center space-x-10">
          <li>
            <NavLink to="/">
              <TextHoverEffect as="span">Home</TextHoverEffect>
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience">
              <TextHoverEffect as="span">Experience</TextHoverEffect>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <TextHoverEffect as="span">Projects</TextHoverEffect>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <TextHoverEffect as="span">Contact</TextHoverEffect>
            </NavLink>
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

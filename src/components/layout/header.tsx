import { useLenis } from "lenis/react";

import { TextHoverEffect } from "../ui/text-hover-effect";

export function Header() {
  const lenis = useLenis();

  return (
    <header className="fixed top-0 bottom-auto w-full bg-transparent p-5 z-50 border-b border-b-electric-green">
      <nav className="container mx-auto flex justify-between">
        <h1>&gt; VERSION 1.1</h1>
        <ul className="lg:flex items-center space-x-10">
          <li>
            <TextHoverEffect
              as="button"
              type="button"
              onClick={() => lenis?.scrollTo("#hero")}
              className="cursor-pointer"
            >
              Home
            </TextHoverEffect>
          </li>
          <li>
            <TextHoverEffect
              as="button"
              type="button"
              onClick={() => lenis?.scrollTo("#experience")}
              className="cursor-pointer"
            >
              Experience
            </TextHoverEffect>
          </li>
          <li>
            <TextHoverEffect
              as="button"
              type="button"
              onClick={() => lenis?.scrollTo("#projects")}
              className="cursor-pointer"
            >
              Projects
            </TextHoverEffect>
          </li>
          <li>
            <TextHoverEffect
              as="button"
              type="button"
              onClick={() => lenis?.scrollTo("#contact")}
              className="cursor-pointer"
            >
              Contact
            </TextHoverEffect>
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

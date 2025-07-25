export function Header() {
  return (
    <header className="fixed top-0 w-full bg-transparent p-5 z-50">
      <nav className="container mx-auto flex justify-between">
        <h1>Victor Lima</h1>
        <ul className="lg:flex items-center space-x-7">
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div>
          <a
            href="/src/assets/curriculo_victor_lima_2025.pdf"
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

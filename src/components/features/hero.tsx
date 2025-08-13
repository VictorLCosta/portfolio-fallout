export function Hero() {
  return (
    <section id="hero" className="panel mx-auto min-w-7xl">
      <div className="flex items-center justify-center gap-x-28 w-full">
        <div className="relative flex flex-col">
          <div className="text-6xl font-bold">
            Hello, I&apos;m Victor, <br />a creative engineer
          </div>
          <p className="tracking-wider mt-12 text-lg">
            A proactive full-stack developer with over 5 years of experience
            crafting high-quality web applications using .NET, React, and
            Angular. I believe in the power of clean, maintainable code and the
            lasting impact of well-crafted software. <br /> <br />
            When I&apos;m not coding, you can find me exploring the world of art
            and weight lifting.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/victor-lima-costa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/VictorLCosta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>

        <div className="relative">
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="container mx-auto flex items-center justify-between lg:flex-row"
    >
      <div className="relative w-full mx-auto text-center flex flex-col gap-y-8 lg:mx-0 lg:max-w-[550px] lg:text-left lg:text-lg">
        <div className="text-4xl font-bold">
          Hello, I&apos;m Victor, <br />a creative engineer
        </div>
        <p className="tracking-wider">
          A proactive full-stack developer with over 5 years of experience
          crafting high-quality web applications using .NET, React, and Angular.
          I believe in the power of clean, maintainable code and the lasting
          impact of well-crafted software. <br />
          When I&apos;m not coding, you can find me exploring the world of art
          and weight lifting.
        </p>
        <div className="flex gap-4">
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

      <div className="relative w-full flex items-center justify-center">
        <img
          src="/images/hero-image.png"
          alt="Victor Lima Costa"
          className=""
        />
      </div>
    </section>
  );
}

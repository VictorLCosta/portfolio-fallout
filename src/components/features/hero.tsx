import eu from "@/assets/images/eu.png";

import { Card } from "../ui/card";

export function Hero() {
  return (
    <section id="hero" className="panel relative mx-auto flex justify-center">
      <div className="container flex items-center justify-center gap-x-28 h-full">
        <div className="relative flex flex-col">
          <div className="text-5xl font-bold text-yellowish font-unison">
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

        <Card className="w-200">
          <Card.Header>
            <b className="uppercase">C:\ Chrome </b>
            <span className="px-2">&lt;BEHOLD&gt;</span>
          </Card.Header>
          <Card.Content>
            <Card.Image src={eu} alt="eu" subtitle="our founder" />
          </Card.Content>
        </Card>
      </div>
    </section>
  );
}

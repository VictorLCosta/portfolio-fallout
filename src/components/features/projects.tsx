import teste from "@/assets/teste.jpg";

import { PixelLoadingImage } from "../ui/pixalated-image";

export function Projects() {
  return (
    <section id="projects" className="relative w-full mx-auto mt-28">
      <h2 className="mb-20 text-center text-4xl text-balance md:mb-36 tracking-tight md:text-6xl">
        My Projects
      </h2>

      <div className="relative container mx-auto flex w-full">
        <div className="mx-auto lg:max-w-[65%]">
          <PixelLoadingImage src={teste} />
        </div>
        <div className="hidden lg:block lg:w-[35%]">
          <div className="sticky top-40">b</div>
        </div>
      </div>
    </section>
  );
}

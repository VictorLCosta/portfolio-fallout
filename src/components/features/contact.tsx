import { Button } from "../ui/button";

export function Contact() {
  return (
    <section id="contact" className="relative w-full mx-auto mt-40 px-4 py-20">
      <div className="flex flex-col gap-y-2 justify-center items-center text-center">
        <h2 className="text-center text-4xl text-balance tracking-wide md:text-6xl">
          FROM CONCEPT TO CREATION <br /> LET&apos;s MAKE IT HAPPEN!
        </h2>
        <Button className="my-10" type="button">
          Get In Touch
        </Button>
        <p className="text-center tracking-wide font-semibold lg:text-2xl">
          I&apos;m available for full-time roles & freelance projects.
        </p>
        <p className="my-2 text-balance lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere <br />
          consectetur blanditiis ad accusamus qui illum possimus.
        </p>
      </div>
    </section>
  );
}

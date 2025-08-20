import { Button } from "../ui/button";
import { MagneticWrapper } from "../ui/magnetic-wrapper";

export function Contact() {
  return (
    <section
      id="contact"
      className="panel relative mx-auto flex justify-center"
    >
      <div className="flex flex-col gap-y-2 justify-center items-center text-center w-full h-full">
        <h2 className="text-center text-4xl text-balance tracking-wide md:text-6xl text-yellowish">
          FROM CONCEPT TO CREATION <br /> LET&apos;s MAKE IT HAPPEN!
        </h2>
        <MagneticWrapper className="my-12">
          <Button type="button">Get In Touch</Button>
        </MagneticWrapper>
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

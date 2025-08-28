import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { Panel } from "@/components/ui/panel";

export default function Contact() {
  return (
    <Panel className="place-items-center">
      <div className="col-span-12 flex flex-col items-center">
        <div className="flex justify-between w-full text-white">
          <span className="text-left">access granted</span>
          <span className="tracking-[0.5rem]">xxx</span>
          <span className="font-nclr text-right">アクセス承認済み</span>
        </div>
        <h2 className="text-center text-4xl text-balance tracking-wide md:text-5xl font-bold text-white font-nclr">
          FROM CONCEPT TO CREATION <br /> LET&apos;s MAKE IT HAPPEN!
        </h2>
        <MagneticWrapper className="my-12">
          <Button type="button">Get In Touch</Button>
        </MagneticWrapper>
        <p className="text-center tracking-wide font-semibold lg:text-2xl">
          I&apos;m available for full-time roles & freelance projects.
        </p>
        <p className="my-2 text-balance text-center lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere <br />
          consectetur blanditiis ad accusamus qui illum possimus.
        </p>
      </div>
    </Panel>
  );
}

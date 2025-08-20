import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import { useRef } from "react";

import { Header, Footer, Hero, Contact } from "@/components";

import type { LenisRef } from "lenis/react";

function App() {
  const lenisRef = useRef<LenisRef>(null);

  const mainRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const slider = sliderRef.current;
      const main = mainRef.current;
      if (!slider || !main) return;

      const getAmountScroll = () => {
        const sliderWidth = slider.scrollWidth;
        return -(sliderWidth - window.innerWidth);
      };

      const tween = gsap.to(slider, {
        x: getAmountScroll(),
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: main,
        start: "top top",
        end: () => `+=${Math.abs(getAmountScroll())}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        markers: false,
        animation: tween,
      });
    },
    { scope: mainRef },
  );

  return (
    <>
      <ReactLenis root ref={lenisRef} />
      <Header />
      <main ref={mainRef} className="!h-screen crt">
        <div ref={sliderRef} className="flex max-w-max">
          <Hero />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

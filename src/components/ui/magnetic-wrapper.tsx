import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type MagneticWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export function MagneticWrapper({ children, className }: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const wrap = ref.current;
      const btn = innerRef.current;
      if (!wrap || !btn) return;

      const rect = wrap.getBoundingClientRect();

      function handleMouseEnter() {
        gsap.to(wrap, {
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(btn, { duration: 0.3, ease: "power2.out" });
      }

      function handleMouseLeave() {
        gsap.to(wrap, {
          duration: 0.25,
          width: rect.width,
          height: rect.height,
          ease: "power2.out",
        });
        gsap.to(btn, {
          duration: 0.45,
          x: 0,
          y: 0,
          ease: "power3.out",
        });
      }

      const handleMouseMove = contextSafe!((e: MouseEvent) => {
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        // calcula deslocamento relativo ao centro
        const moveX = (relX - rect.width / 2) * 0.35;
        const moveY = (relY - rect.height / 2) * 0.35;

        gsap.to(btn, {
          duration: 0.22,
          x: moveX,
          y: moveY,
          ease: "power2.out",
        });
      });

      wrap.addEventListener("mousemove", handleMouseMove);
      wrap.addEventListener("mouseleave", handleMouseLeave);
      wrap.addEventListener("mouseenter", handleMouseEnter);

      // eslint-disable-next-line consistent-return
      return () => {
        wrap.removeEventListener("mousemove", handleMouseMove);
        wrap.removeEventListener("mouseleave", handleMouseLeave);
        wrap.removeEventListener("mouseenter", handleMouseEnter);
      };
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className={`relative inline-flex justify-center items-center ${className || ""}`}
    >
      <div ref={innerRef} className="w-fit">
        {children}
      </div>
    </div>
  );
}

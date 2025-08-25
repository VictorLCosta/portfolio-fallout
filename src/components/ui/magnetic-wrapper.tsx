/* eslint-disable consistent-return */

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import useMousePosition from "@/hooks/useMousePosition";
import { distance } from "@/utils";
import { cn } from "@/utils/cn";

type MagneticWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export function MagneticWrapper({ children, className }: MagneticWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { mouseX, mouseY } = useMousePosition();

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();

    const distanceToTrigger = rect.width * 0.7;
    const distanceMouseButton = distance(
      mouseX,
      mouseY,
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
    );

    if (distanceMouseButton < distanceToTrigger) {
      const relX = mouseX - rect.left;
      const relY = mouseY - rect.top;

      const moveX = (relX - rect.width / 2) * 0.4;
      const moveY = (relY - rect.height / 2) * 0.4;

      gsap.to(container, {
        duration: 0.22,
        x: moveX,
        y: moveY,
        ease: "power2.out",
      });
    } else {
      gsap.to(container, {
        duration: 0.45,
        x: 0,
        y: 0,
        ease: "power3.out",
      });
    }
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className={cn("relative w-fit", className)}>
      {children}
    </div>
  );
}

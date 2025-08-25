import { useState, useEffect } from "react";

type MousePos = {
  mouseX: number;
  mouseY: number;
};

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePos>({
    mouseX: 0,
    mouseY: 0,
  });

  const updateMousePosition = (ev: MouseEvent) => {
    setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;

/* eslint-disable consistent-return */

import { useEffect, useRef, useState } from "react";

export function useOnScreen<T extends Element>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options,
    );

    observer.observe(ref.current);

    const rect = ref.current.getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      setIsVisible(true);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible] as const;
}

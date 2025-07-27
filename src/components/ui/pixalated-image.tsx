import { useRef, useState, useEffect } from "react";

import { useOnScreen } from "@/hooks/useOnScreen";

function renderImage() {

}

export function PixelLoadingImage({
  src,
  alt,
  className,
  width,
  height,
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>();

  return (
    <div ref={ref} className="relative overflow-hidden w-fit h-fit">
      <img src={src} alt={alt} />
    </div>
  );
}

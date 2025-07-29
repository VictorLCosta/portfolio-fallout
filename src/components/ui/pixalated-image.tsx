/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

import { useOnScreen } from "@/hooks/useOnScreen";
import { cn } from "@/utils/cn";

export type PixelLoadingImageProps = {
  src: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function PixelLoadingImage({ src, className }: PixelLoadingImageProps) {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(new Image());

  const styles = cn(
    `bg-[url('${src}')]`,
    isVisible && "opacity-100",
    !isVisible && "opacity-0",
    "relative bg-cover",
    className,
  );

  useEffect(() => {
    if (isVisible) {
      const canvasWrap = ref.current!;
      const canvas = canvasRef.current!;
      const image = imageRef.current!;
      let imgRatio = 0;
      const pxFactorValues = [1, 2, 4, 9, 100];
      let pxIndex = 0;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const setCanvasSize = () => {
        canvas.width = canvasWrap.offsetWidth;
        canvas.height = canvasWrap.offsetHeight;
      };

      const render = () => {
        const { offsetWidth } = canvasWrap;
        const { offsetHeight } = canvasWrap;
        // increase a bit to not have a gap in the end of the image
        // when we have big pizel sizes
        const w = offsetWidth + offsetWidth * 0.05;
        const h = offsetHeight + offsetHeight * 0.05;

        // Calculate the dimensions and position for rendering the image
        // within the canvas based on the image aspect ratio.
        let newWidth = w;
        let newHeight = h;
        let newX = 0;
        const newY = 0;

        // Adjust the dimensions and position if the image
        // aspect ratio is different from the canvas aspect ratio
        if (newWidth / newHeight > imgRatio) {
          newHeight = Math.round(w / imgRatio);
          // let's keep Y at 0 because we want the pixels to not
          // be cut off at the top. Uncomment if you want the
          // image to be centered.
          // newY = (h - newHeight) / 2;
        } else {
          newWidth = Math.round(h * imgRatio);
          newX = (w - newWidth) / 2;
        }

        // Get the pixel factor based on the current index
        const pxFactor = pxFactorValues[pxIndex];
        const size = pxFactor * 0.01;

        // Turn off image smoothing to achieve the pixelated effect
        (ctx as any).mozImageSmoothingEnabled = size === 1;
        (ctx as any).webkitImageSmoothingEnabled = size === 1;
        ctx.imageSmoothingEnabled = size === 1;

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the original image at a fraction of the final size
        ctx.drawImage(image, 0, 0, w * size, h * size);

        // Enlarge the minimized image to full size
        ctx.drawImage(
          canvas,
          0,
          0,
          w * size,
          h * size,
          newX,
          newY,
          newWidth,
          newHeight,
        );
      };

      /**
       * Animates the pixelation effect.
       * Renders the image with increasing pixelation factor at each step.
       */
      const animatePixels = () => {
        if (pxIndex < pxFactorValues.length) {
          // Increase the pixelation factor and continue animating
          setTimeout(
            () => {
              // Render the image with the current pixelation factor
              render();
              pxIndex += 1;
              animatePixels();
            },
            pxIndex === 0 ? 300 : 80,
          ); // The first time should be the longest.
        } else {
          pxIndex = pxFactorValues.length - 1;
        }
      };

      image.src = src;
      image.onload = () => {
        imgRatio = image.width / image.height;
        canvas.width = 300;
        canvas.height = canvas.width / imgRatio;

        setCanvasSize();
        render();
        animatePixels();
      };
    }
  }, [isVisible]);

  return (
    <div ref={ref} className={styles}>
      <canvas ref={canvasRef} />
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
/* eslint-disable react/function-component-definition */

import React, { useEffect, useRef } from "react";

type PixelatedImageProps = React.CanvasHTMLAttributes<HTMLCanvasElement> & {
  src: string;
  alt?: string;
  time?: string; // ex: "1.5s" ou "500ms"
  delay?: string;
};

function toMS(s: string): number {
  return parseFloat(s) * (/\ds$/.test(s) ? 1000 : 1);
}

function runOn(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  timeToVisible: number,
  started: number,
  delay: number,
) {
  if (!started) {
    started = Date.now();
  }

  const { width } = canvas;
  const { height } = canvas;

  const delta = Math.max(
    0,
    Math.min(1, (Date.now() - started - delay) / timeToVisible),
  );

  const factorDelta = Math.min(1, delta ** 7);
  const factorMin = 0.01;
  const factor = factorMin + factorDelta * (1 - factorMin);

  const idealDivisions = Math.floor(width / (1 / factor));
  const boundedFactor = idealDivisions / width;

  const smallWidth = width * boundedFactor;
  const smallHeight = height * boundedFactor;

  context.drawImage(image, 0, 0, smallWidth, smallHeight);
  context.drawImage(canvas, 0, 0, smallWidth, smallHeight, 0, 0, width, height);

  if (delta < 1) {
    requestAnimationFrame(() =>
      runOn(canvas, context, image, timeToVisible, started, delay),
    );
  }
}

export const PixelatedImage: React.FC<PixelatedImageProps> = ({
  src,
  alt,
  time = "1.5s",
  delay = "0s",
  ...rest
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const styleTime = toMS(time);
    const styleDelay = toMS(delay);
    const image = new Image();

    image.addEventListener("load", () => {
      canvas.width = image.width;
      canvas.height = image.height;

      const context = canvas.getContext("2d");
      if (!context) return;

      // desabilitar suavização
      const properties: (keyof CanvasRenderingContext2D)[] = [
        "msImageSmoothingEnabled" as any,
        "mozImageSmoothingEnabled" as any,
        "webkitImageSmoothingEnabled" as any,
        "imageSmoothingEnabled",
      ];
      properties.forEach((prop) => {
        (context as any)[prop] = false;
      });

      runOn(canvas, context, image, styleTime, 0, styleDelay);
    });

    image.src = src;

    return () => {
      image.onload = null;
    };
  }, [src, time, delay]);

  return <canvas ref={canvasRef} aria-label={alt} {...rest} />;
};

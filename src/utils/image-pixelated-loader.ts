/* eslint-disable @typescript-eslint/no-explicit-any */

// Classe responsável pelo efeito de pixelização
export class ImagePixelatedLoader {
  private el: HTMLElement | null;

  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D | null;

  private imgSrc: string;

  private img: HTMLImageElement | null;

  private imgRatio = 0;

  private pxFactorValues = [1, 2, 4, 70, 100];

  private pxIndex = 0;

  constructor(el: HTMLElement, imgSrc: string) {
    this.el = el;

    this.imgSrc = imgSrc;

    this.canvas = document.createElement("canvas");
    el.appendChild(this.canvas);

    this.canvas.className =
      "absolute top-0 left-0 w-full h-full bg-position-[50%_50%]";

    this.ctx = this.canvas.getContext("2d");

    this.img = new Image();
    this.img.src = this.imgSrc;

    this.img.onload = () => {
      if (!this.img) return;

      const imgWidth = this.img.width;
      const imgHeight = this.img.height;
      this.imgRatio = imgWidth / imgHeight;

      this.setCanvasSize();
      this.render();
      this.animatePixels();
    };
  }

  private setCanvasSize() {
    this.canvas.width = this.el!.offsetWidth;
    this.canvas.height = this.el!.offsetHeight;
  }

  render() {
    if (!this.ctx || !this.img) return;

    const { offsetWidth } = this.canvas;
    const { offsetHeight } = this.canvas;
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

    if (newWidth / newHeight > this.imgRatio) {
      newHeight = Math.round(w / this.imgRatio);
      // let's keep Y at 0 because we want the pixels to not
      // be cut off at the top. Uncomment if you want the
      // image to be centered.
      // newY = (h - newHeight) / 2;
    } else {
      newWidth = Math.round(h * this.imgRatio);
      newX = (w - newWidth) / 2;
    }

    // Get the pixel factor based on the current index
    const pxFactor = this.pxFactorValues[this.pxIndex];
    const size = pxFactor * 0.01;

    // Turn off image smoothing to achieve the pixelated effect
    (this.ctx as any).mozImageSmoothingEnabled = size === 1;
    (this.ctx as any).webkitImageSmoothingEnabled = size === 1;
    this.ctx.imageSmoothingEnabled = size === 1;

    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw the original image at a fraction of the final size
    this.ctx.drawImage(this.img, 0, 0, w * size, h * size);

    // Enlarge the minimized image to full size
    this.ctx.drawImage(
      this.canvas,
      0,
      0,
      w * size,
      h * size,
      newX,
      newY,
      newWidth,
      newHeight,
    );
  }

  animatePixels() {
    if (this.pxIndex < this.pxFactorValues.length) {
      // Increase the pixelation factor and continue animating
      setTimeout(
        () => {
          // Render the image with the current pixelation factor
          this.render();
          this.pxIndex += 1;
          this.animatePixels();
        },
        this.pxIndex === 0 ? 300 : 80,
      ); // The first time should be the longest.
    } else {
      this.pxIndex = this.pxFactorValues.length - 1;
    }
  }
}

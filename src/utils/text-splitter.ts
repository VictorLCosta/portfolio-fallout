import SplitType from "split-type";

import { debounce } from "./index";

import type { SplitTypeOptions } from "split-type";

interface TextSplitterOptions {
  resizeCallback?: () => void;
  splitTypeTypes?: SplitTypeOptions;
}

export class TextSplitter {
  private textElement: HTMLElement;

  private onResize: (() => void) | null;

  private splitText: SplitType;

  private previousContainerWidth: number | null = null;

  constructor(textElement: HTMLElement, options: TextSplitterOptions = {}) {
    if (!textElement || !(textElement instanceof HTMLElement)) {
      throw new Error("Invalid text element provided.");
    }

    const { resizeCallback, splitTypeTypes } = options;

    this.textElement = textElement;
    this.onResize =
      typeof resizeCallback === "function" ? resizeCallback : null;

    const splitOptions = splitTypeTypes ?? {};
    this.splitText = new SplitType(this.textElement, splitOptions);

    if (this.onResize) {
      this.initResizeObserver();
    }
  }

  private initResizeObserver() {
    const resizeObserver = new ResizeObserver(
      debounce(
        (entries: ResizeObserverEntry[]) => this.handleResize(entries),
        100,
      ),
    );
    resizeObserver.observe(this.textElement);
  }

  private handleResize(entries: ResizeObserverEntry[]) {
    const [{ contentRect }] = entries;
    const width = Math.floor(contentRect.width);

    if (this.previousContainerWidth && this.previousContainerWidth !== width) {
      this.splitText.split({});
      this.onResize?.();
    }

    this.previousContainerWidth = width;
  }

  revert() {
    return this.splitText.revert();
  }

  getLines(): HTMLElement[] {
    return this.splitText.lines!;
  }

  getWords(): HTMLElement[] {
    return this.splitText.words!;
  }

  getChars(): HTMLElement[] {
    return this.splitText.chars!;
  }
}

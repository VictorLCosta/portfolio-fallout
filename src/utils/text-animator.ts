/* eslint-disable no-param-reassign */

import gsap from "gsap";

import { TextSplitter } from "./text-splitter";

import type { SplitTypeOptions } from "split-type";

const lettersAndSymbols = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "-",
  "_",
  "+",
  "=",
  ";",
  ":",
  "<",
  ">",
  ",",
];
const randomColors = ["#eaf5e6", "#268d00", "#154f00", "#95ce80"];

// Defines a class to create hover effects on text.
export class TextAnimator {
  private textElement: HTMLElement;

  private splitter!: TextSplitter;

  private originalChars: string[] = [];

  private originalColors: string[] = [];

  constructor(textElement: HTMLElement) {
    if (!textElement || !(textElement instanceof HTMLElement)) {
      throw new Error("Invalid text element provided.");
    }

    this.textElement = textElement;
    this.splitText();
  }

  private splitText(): void {
    this.splitter = new TextSplitter(this.textElement, {
      splitTypeTypes: { types: "chars,words" } as SplitTypeOptions,
    });

    const chars = this.splitter.getChars();
    this.originalChars = chars.map((char) => char.innerHTML);
    this.originalColors = chars.map((char) => getComputedStyle(char).color);
  }

  public animate(): void {
    this.reset();

    const chars = this.splitter.getChars();

    chars.forEach((char, position) => {
      const initialHTML = char.innerHTML;
      const initialColor = getComputedStyle(char).color;

      gsap.timeline().fromTo(
        char,
        {
          opacity: 0,
          transformOrigin: "50% 0%",
        },
        {
          duration: 0.03,
          ease: "none",
          repeat: 3,
          repeatRefresh: true,
          repeatDelay: 0.1,
          delay: (position + 1) * 0.08,
          onComplete: () => {
            gsap.set(char, {
              innerHTML: initialHTML,
              color: initialColor,
              delay: 0.03,
            });
          },
          innerHTML: () => {
            const randomChar =
              lettersAndSymbols[
                Math.floor(Math.random() * lettersAndSymbols.length)
              ];
            const randomColor =
              randomColors[Math.floor(Math.random() * randomColors.length)];
            gsap.set(char, { color: randomColor });
            return randomChar;
          },
          opacity: 1,
        },
      );
    });
  }

  public reset(): void {
    const chars = this.splitter.getChars();
    chars.forEach((char, index) => {
      gsap.killTweensOf(char);
      char.innerHTML = this.originalChars[index];
      char.style.color = this.originalColors[index];
    });
  }
}

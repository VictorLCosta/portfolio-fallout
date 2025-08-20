/* eslint-disable @typescript-eslint/no-explicit-any */

// Linear interpolation
export const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

export const distance = (x1: number, y1: number, x2: number, y2: number) => {
  const a = x1 - x2;
  const b = y1 - y2;

  return Math.hypot(a, b);
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number,
) => {
  let timerId: ReturnType<typeof setTimeout> | undefined;

  return (...args: Parameters<T>): void => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

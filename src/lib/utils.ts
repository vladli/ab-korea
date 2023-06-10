import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateNumbers = (
  start: number,
  increment: number,
  count: number
) => {
  const numbers = [];

  for (let i = 0; i < count; i++) {
    const number = start + i * increment;
    numbers.push(number);
  }

  return numbers;
};

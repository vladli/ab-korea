import { useCallback } from "react";
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

export const createQueryString = (
  searchParams: URLSearchParams,
  name: string | string[],
  value?: string | null,
  type = "Create"
) => {
  const params = new URLSearchParams(searchParams.toString());

  if (typeof name === "string") {
    if (type === "Create" && value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
  } else if (Array.isArray(name)) {
    name.forEach((paramName) => {
      if (type === "Create" && value) {
        params.set(paramName, value);
      } else {
        params.delete(paramName);
      }
    });
  }

  return params.toString();
};

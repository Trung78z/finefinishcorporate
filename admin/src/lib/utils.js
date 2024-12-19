import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function formatContent(data, length) {
  if (data.length > length) {
    return data.substring(0, length) + "...";
  }
  return data;
}

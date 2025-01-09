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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
export function getRandomItems(array, numberOfItems) {
  const shuffled = shuffleArray(array.slice());
  return shuffled.slice(0, numberOfItems);
}

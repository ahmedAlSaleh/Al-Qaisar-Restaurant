import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Lightweight SVG blur placeholder for next/image with fine dining warm gold tint */
export const GOLD_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiMwNDBhMDgiLz48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI1IiBmaWxsPSIjYzlhODRjIiBvcGFjaXR5PSIwLjE1Ii8+PC9zdmc+";


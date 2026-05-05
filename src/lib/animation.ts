export const shouldReduceMotion = (): boolean => {
  if (typeof window === "undefined" || !("matchMedia" in window)) return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

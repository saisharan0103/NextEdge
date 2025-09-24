const getVar = (variable: string, fallback: string) => {
  if (typeof window === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  return value || fallback;
};

export const EASE = getVar("--ease", "cubic-bezier(.2,.8,.2,1)");
export const DUR_ENTER = getVar("--dur-enter", "420ms");

export function inViewReveal(selector = ".reveal", rootMargin = "0px 0px -20% 0px") {
  if (typeof window === "undefined") return;

  const elements = document.querySelectorAll<HTMLElement>(selector);
  if (!elements.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin, threshold: 0 },
  );

  elements.forEach((element) => observer.observe(element));
}

export function floatY(element: HTMLElement, amplitude = 6, periodMs = 6000) {
  if (typeof window === "undefined") return () => undefined;
  let animationFrame: number;
  let time = 0;

  const step = () => {
    const offset = Math.sin((time / periodMs) * Math.PI * 2) * amplitude;
    element.style.transform = `translateY(${offset}px)`;
    time += 16.67;
    animationFrame = window.requestAnimationFrame(step);
  };

  animationFrame = window.requestAnimationFrame(step);

  return () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
  };
}

import { useEffect, useRef } from "react";

// Adds the "is-visible" class to any [data-reveal] descendant once it
// scrolls into view. Kept lightweight (no animation library) and respects
// prefers-reduced-motion by relying on the CSS media query in index.css.
export default function useReveal(deps = []) {
  const scopeRef = useRef(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const targets = scope.hasAttribute("data-reveal")
      ? [scope]
      : Array.from(scope.querySelectorAll("[data-reveal]"));

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scopeRef;
}

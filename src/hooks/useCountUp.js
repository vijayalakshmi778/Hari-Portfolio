import { useEffect, useRef, useState } from "react";

// Animates a numeric value from 0 up to `target` once the element enters
// the viewport. Non-numeric labels (e.g. "Data →") are returned as-is.
export default function useCountUp(rawValue, duration = 1200) {
  const match = String(rawValue).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(target === null ? rawValue : "0" + suffix);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (target === null || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * target) + suffix);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return [ref, display];
}

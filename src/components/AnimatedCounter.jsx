import { useState, useEffect, useRef } from 'react';

/**
 * AnimatedCounter
 * Smoothly counts up to target number using easeOutExpo when scrolled into view.
 */
export default function AnimatedCounter({
  target = 0,
  duration = 1200,
  prefix = '',
  suffix = '',
  className = ''
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el || hasAnimated) return;

    if (!('IntersectionObserver' in window)) {
      setCount(target);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();

          const startTime = performance.now();
          const startVal = 0;
          const endVal = Number(target) || 0;

          const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // easeOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentCount = Math.round(startVal + (endVal - startVal) * easeProgress);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(update);
            }
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={`animated-counter ${className}`}>
      {prefix}
      {hasAnimated ? count : target}
      {suffix}
    </span>
  );
}

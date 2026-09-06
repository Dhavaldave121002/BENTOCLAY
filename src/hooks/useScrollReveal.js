import { useEffect } from 'react';

/**
 * useScrollReveal
 * Automatically attaches an IntersectionObserver to all elements with '.reveal-on-scroll'
 * within the given container or entire document. When in view, adds '.is-revealed'.
 */
export function useScrollReveal(dependencies = []) {
  useEffect(() => {
    // If IntersectionObserver is not supported, reveal everything immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Once revealed, no need to observe again
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    // Query elements
    const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, dependencies);
}

export default useScrollReveal;

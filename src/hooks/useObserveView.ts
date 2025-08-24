import { useEffect, useRef, useState } from "react";

export function useObserveView<T extends HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const [isView, setIsView] = useState<boolean>(false);

  useEffect(() => {
    // SSR
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsView(entry.isIntersecting);
        console.log("isTe", entry.isIntersecting);
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return { ref, isView };
}

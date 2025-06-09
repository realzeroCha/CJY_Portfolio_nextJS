"use client";

import { useEffect, useRef, useState } from "react";

export const useAnimatedView = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsAnimated(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return { ref, isAnimated };
};

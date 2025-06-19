"use client";

import { useEffect, useState } from "react";

// Overview 타이핑 애니메이션
export const useTypingEffect = (text: string, speed: number) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let index = 0;

    const tick = () => {
      if (index <= text.length) {
        const next = text.slice(0, index);
        setDisplayText(next);
        index += 1;
      } else {
        clearInterval(interval);
      }
    };

    const interval = setInterval(tick, speed);
    tick();

    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayText };
};

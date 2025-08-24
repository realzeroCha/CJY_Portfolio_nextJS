"use client";

import React from "react";
import { useAnimatedView } from "../hooks/useAnimatedView";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedText({ children }: AnimatedTextProps) {
  const { ref, isAnimated } = useAnimatedView();

  return (
    <div ref={ref} className={`${isAnimated && "animateSlideIn"}`}>
      {children}
    </div>
  );
}

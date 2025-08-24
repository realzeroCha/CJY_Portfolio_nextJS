"use client";

import { ToggleWrap } from "./styles";
import { ThemeToggleProps } from "./types";

export const ThemeToggle = ({ toggle, isDark }: ThemeToggleProps) => {
  if (typeof window === "undefined") return;

  return <ToggleWrap onClick={toggle}>{isDark ? "LIGHT" : "DARK"}</ToggleWrap>;
};

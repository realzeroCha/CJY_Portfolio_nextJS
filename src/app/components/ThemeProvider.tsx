"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { dark, light } from "../styles/ThemeStyle";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setIsDark(true);
    document.documentElement.classList.toggle("dark", true);
    setHasMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    document.documentElement.classList.toggle("dark", newTheme);
    setIsDark(newTheme);
  };

  return (
    <StyledThemeProvider theme={isDark ? dark : light}>
      {hasMounted && <ThemeToggle toggle={toggleTheme} isDark={isDark} />}
      {children}
    </StyledThemeProvider>
  );
};

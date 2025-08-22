"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { dark, light } from "../util/styles/ThemeStyle";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const dark = window.localStorage.getItem("theme") === "dark";
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
    setHasMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    window.localStorage.setItem("theme", newTheme ? "dark" : "light");
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

"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

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
    <>
      {hasMounted && <ThemeToggle toggle={toggleTheme} isDark={isDark} />}
      {children}
    </>
  );
};

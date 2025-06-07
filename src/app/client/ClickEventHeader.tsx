"use client";

import { useEffect } from "react";

export const ClickEventHeader = () => {
  useEffect(() => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    const topBtn = document.getElementById("topBtn");
    topBtn?.addEventListener("click", () => scrollTo("top"));

    const aboutBtn = document.getElementById("aboutBtn");
    aboutBtn?.addEventListener("click", () => scrollTo("about"));

    const skillsBtn = document.getElementById("skillsBtn");
    skillsBtn?.addEventListener("click", () => scrollTo("skills"));

    const careerBtn = document.getElementById("careerBtn");
    careerBtn?.addEventListener("click", () => scrollTo("career"));

    return () => {
      topBtn?.removeEventListener("click", () => scrollTo("overview"));
      aboutBtn?.removeEventListener("click", () => scrollTo("about"));
      skillsBtn?.removeEventListener("click", () => scrollTo("skills"));
      careerBtn?.removeEventListener("click", () => scrollTo("career"));
    };
  }, []);

  return null;
};

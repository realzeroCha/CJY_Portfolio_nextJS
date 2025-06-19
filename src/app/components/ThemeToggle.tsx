"use client";

type Props = {
  toggle: () => void;
  isDark: boolean;
};

export const ThemeToggle = ({ toggle, isDark }: Props) => {
  if (typeof window === "undefined") return;

  return (
    <button
      onClick={toggle}
      className="fixed w-12 h-12 text-center bottom-8 right-8 p-2 bg-black dark:bg-white rounded-full z-10"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
};

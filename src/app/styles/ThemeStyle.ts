export const light = {
  background: "#ffffff",
  text: "#000000",
} as const;

export const dark = {
  background: "#000000",
  text: "#ffffff",
} as const;

export type ThemeType = typeof dark;

export const useAnimationEnd = (text: string, displayText: string) => {
  if (typeof window === "undefined") return true;

  return text === displayText;
};

export const useAnimationEnd = (text: string, displayText: string) => {
  if (typeof window === "undefined") return true;

  if (text !== displayText) {
    return false;
  }

  return true;
};

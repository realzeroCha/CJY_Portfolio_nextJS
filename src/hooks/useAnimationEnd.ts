import { useMemo } from "react";

export const useAnimationEnd = (text: string, displayText: string) => {
  return useMemo(() => {
    return text === displayText;
  }, [text, displayText]);
};

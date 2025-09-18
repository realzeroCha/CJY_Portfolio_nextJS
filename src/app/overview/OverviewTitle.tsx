"use client";

import { useEffect, useState } from "react";
import { useAnimationEnd } from "../../hooks/useAnimationEnd";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import { Title, TitleOverlay } from "./styles";
import { OverviewTitleProps } from "./types";

const OverviewTitle = ({ text, speed = 100 }: OverviewTitleProps) => {
  const { displayText } = useTypingEffect(text, speed);
  const animatedEnd = useAnimationEnd(text, displayText);

  const [isAnimatedEnd, setIsAnimatedEnd] = useState<boolean>(false);

  const getText = () => {
    if (isAnimatedEnd) return text;
    else return displayText;
  };

  useEffect(() => {
    setIsAnimatedEnd(animatedEnd);
  }, [animatedEnd]);

  return (
    <>
      <Title $isEnd={isAnimatedEnd} $text={text}>
        {getText()}
        {isAnimatedEnd && (
          <>
            <TitleOverlay $type={0}>{getText()}</TitleOverlay>
            <TitleOverlay $type={1}>{getText()}</TitleOverlay>
          </>
        )}
      </Title>
    </>
  );
};
export default OverviewTitle;

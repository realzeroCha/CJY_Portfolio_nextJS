"use client";

import { useAnimationEnd } from "../../hooks/useAnimationEnd";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import { Cursor, Title } from "./styles";
import { OverviewTitleProps } from "./types";

const OverviewTitle = ({ text, speed = 100 }: OverviewTitleProps) => {
  const { displayText } = useTypingEffect(text, speed);

  const isAnimatedEnd = useAnimationEnd(text, displayText);

  return (
    <Title $isEnd={isAnimatedEnd} $text={text}>
      {displayText}
      {!isAnimatedEnd && <Cursor>|</Cursor>}
    </Title>
  );
};
export default OverviewTitle;

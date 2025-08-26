"use client";

import tw from "tailwind-styled-components";
import { useAnimationEnd } from "../../hooks/useAnimationEnd";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import { Title } from "./styles";
import { OverviewTitleProps } from "./types";

const Cursor = tw.span`inline-block w-[1ch] blinking`;

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

"use client";

import tw from "tailwind-styled-components";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { useAnimationEnd } from "../hooks/useAnimationEnd";
import styled from "styled-components";

type TitleProps = {
  $isEnd: boolean;
  $text: string;
};

const Title = styled.div<TitleProps>`
  position: relative;
  width: 100%;
  font-size: 6rem;
  line-height: 7.2rem;
  font-weight: 900;
  color: ${(p) => (p.$isEnd ? "transparent" : `${({ theme }) => theme.text}`)};
  font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans CJK KR",
    sans-serif;
  -webkit-text-stroke: ${(p) => (p.$isEnd ? "1px" : "0px")}
    ${({ theme }) => theme.text};

  @media (max-width: 900px) {
    font-size: 4rem;
    line-height: 5rem;
  }
  @media (max-width: 600px) {
    font-size: 3rem;
    line-height: 3.6rem;
  }
  &::before {
    position: absolute;
    top: 48%;
    left: -0.5rem;
    transform: translateY(-50%);
    content: "${(p) => (p.$isEnd ? "FRONT-END\\A CHA JINYOUNG" : "")}";
    -webkit-text-stroke: 1px red;
    opacity: 0.4;
  }
  &::after {
    position: absolute;
    top: 52%;
    left: 0.5rem;
    transform: translateY(-50%);
    content: "${(p) => (p.$isEnd ? "FRONT-END\\A CHA JINYOUNG" : "")}";
    -webkit-text-stroke: 1px yellow;
    opacity: 0.4;
  }
`;
const Cursor = tw.span`inline-block w-[1ch] blinking`;

interface OverviewTitleProps {
  text: string;
  speed?: number;
}

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

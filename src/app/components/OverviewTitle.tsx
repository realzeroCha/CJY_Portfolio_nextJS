"use client";

import tw from "tailwind-styled-components";
import { useTypingEffect } from "../hooks/useTypingEffect";

const Title = tw.h1`text-[1.5rem] font-bold font-SB_Aggro_L sm:text-[2.75rem] lg:text-[3.75rem] relative translate-y-[40%]`;
const Cursor = tw.span`inline-block w-[1ch] blinking`;

interface OverviewTitleProps {
  text: string;
  speed?: number;
}

const OverviewTitle = ({ text, speed = 120 }: OverviewTitleProps) => {
  const { displayText } = useTypingEffect(text, speed);

  return (
    <Title>
      {displayText}
      <Cursor>|</Cursor>
    </Title>
  );
};
export default OverviewTitle;

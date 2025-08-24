import tw from "tailwind-styled-components";
import styled from "styled-components";
import { AboutTitleProps } from "./types";

export const AboutWrap = tw.div`my-8 flex flex-col gap-2`;
export const AboutListWrap = tw.div`mt-6 flex gap-4 flex-wrap justify-center`;
export const AboutTitle = styled.h3<AboutTitleProps>`
  position: sticky;
  top: 8rem;
  margin-left: ${(p) => {
    const calculatedLeft = (p.$index / p.$itemLength) * 100;
    console.log(
      `Index: ${p.$index}, Item Length: ${p.$itemLength}, Calculated Left: ${calculatedLeft}%`
    );
    return `${calculatedLeft}%`;
  }};
  width: 25%;
  height: 30vh;
  color: ${({ theme }) => theme.text};
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;
export const AboutItem = tw.div`flex-1 min-w-[50vw] shadow-md border-[1px] border-[#bbbbbb] dark:border-white flex items-center gap-3 p-4 bg-white black:bg-[#222222] rounded-[5] text-[#333333] sm:flex-none text-[0.9rem] sm:text-[1rem]`;
export const AboutItemLink = tw.a`flex-1 min-w-[50vw] shadow-md border-[1px] border-[#bbbbbb] dark:border-white flex items-center gap-3 p-4 bg-white black:bg-[#222222] rounded-[5] text-[#333333] hover:text-[#228b22] transition-none sm:flex-none text-[0.9rem] sm:text-[1rem]`;
export const AboutImage = tw.img`rounded-full bg-white w-6 h-6 sm:w-8 sm:h-8`;
export const LinkImage = tw.img`ml-[-6px] w-3 h-3 sm:w-4 sm:h-4`;

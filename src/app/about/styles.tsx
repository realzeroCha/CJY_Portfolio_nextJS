import styled from "styled-components";
import tw from "tailwind-styled-components";
import { AboutTitleWrapProps } from "./types";

export const AboutWrap = tw.div`my-8 flex flex-col gap-2 mx-[8%] sm:mx-4`;
export const AboutListWrap = tw.div`mb-[30%] flex gap-4 space`;

export const AboutTitleWrap = styled.div<AboutTitleWrapProps>`
  position: sticky;
  top: 20rem;
  margin-left: ${(p) => {
    return `${(p.$index / p.$itemLength) * 100}%`;
  }};
  width: 25%;
  aspect-ratio: 1/1;
  margin-bottom: 30%;

  @media (max-width: 640px) {
    width: auto;
    height: 40vh;
    top: ${(p) => {
      return `${p.$index * 4 + 6}rem`;
    }};
    margin-left: 0;
  }
`;
export const AboutTitle = tw.h3`
  grid place-items-center sm:w-[90%] py-2 mx-auto sm:aspect-square text-center rounded-lg sm:rounded-full shadow-none sm:shadow-[0_0_10px_0px_#228b22] bg-white
`;

export const AboutItemLink = tw.a`
  group relative bg-white p-0.5 rounded-[10px] shadow-md transition-all duration-500 ease-in-out
  before:content-[''] before:absolute before:rounded-[10px] before:z-10 before:w-full before:h-full
  before:top-0 before:left-0 before:scale-x-0 before:origin-left
  before:transition-transform before:duration-400 before:ease-in-out
  before:[box-shadow:inset_4px_0px_0px_#228b22,inset_0px_4px_0px_#228b22]

  after:content-[''] after:absolute after:rounded-[10px] after:z-10 after:w-full after:h-full
  after:bottom-0 after:right-0 after:scale-x-0 after:origin-right
  after:transition-transform after:duration-400 after:ease-in-out
  after:[box-shadow:inset_-4px_0px_0px_#228b22,inset_0px_-4px_0px_#228b22]

  hover:before:scale-x-100 hover:after:scale-x-100
`;

export const AboutTextWrap = tw.div`
  flex flex-col my-6 space
`;

export const AboutTextImg = tw.img`rounded-sm bg-white w-6 h-6 p-0.5 shadow-md`;
export const AboutText = tw.p`
  flex items-center gap-2.5 text-[1rem]/[1.5rem] m-2 font-normal font-SB_Aggro_L text-black dark:text-white
`;

export const AboutImage = tw.img`rounded-md bg-white w-10 h-10 sm:w-14 sm:h-14 p-1`;
export const LinkImage = tw.img`ml-[-6px] w-3 h-3 sm:w-4 sm:h-4`;

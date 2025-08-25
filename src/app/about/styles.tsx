import styled from "styled-components";
import tw from "tailwind-styled-components";
import { AboutTitleWrapProps } from "./types";

export const AboutWrap = tw.div`my-8 flex flex-col gap-2`;
export const AboutListWrap = tw.div`mb-[30%] flex gap-4`;

export const AboutTitleWrap = styled.div<AboutTitleWrapProps>`
  position: sticky;
  top: 20rem;
  margin-left: ${(p) => {
    return `${(p.$index / p.$itemLength) * 100}%`;
  }};
  width: 25%;
  height: 50vh;

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
  grid place-items-center sm:w-[90%] py-2 mx-auto sm:aspect-square text-[1.5rem] font-SB_Aggro_B font-[500] text-center sm:text-[1.1rem] rounded-lg sm:rounded-full shadow-none sm:shadow-[0_0_10px_0px_#228b22] bg-white text-[#333333]
`;

export const AboutItemLink = styled.a`
  position: relative;
  background: #fff;
  padding: 2px;
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px #00000010;
  transition: all 0.5s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    transition: transform 0.4s ease;
    border-radius: 10px;
    z-index: 1;
  }

  &::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: left;
    box-shadow: inset 4px 0px 0px #228b22, inset 0px 4px 0px #228b22;
  }
  &::after {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: right;
    box-shadow: inset -4px 0px 0px #228b22, inset 0px -4px 0px #228b22;
  }

  &:hover::before,
  &:hover::after {
    transform: scaleX(1);
  }
`;

export const AboutTextWrap = tw.div`
  flex flex-col my-6
`;

export const AboutTextImg = tw.img`rounded-sm bg-white w-6 h-6 p-0.5 shadow-md`;
export const AboutText = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  font-family: "SB_Aggro_L";
`;

export const AboutImage = tw.img`rounded-md bg-white w-10 h-10 sm:w-14 sm:h-14 p-1`;
export const LinkImage = tw.img`ml-[-6px] w-3 h-3 sm:w-4 sm:h-4`;

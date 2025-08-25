import styled from "styled-components";
import tw from "tailwind-styled-components";

export const SectionTitle = styled.h1`
  position: relative;
  width: 100%;
  font-size: 3.5rem;
  line-height: 4rem;
  font-weight: 900;
  padding-bottom: 6%;
  color: transparent;
  font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans CJK KR",
    sans-serif;
  -webkit-text-stroke: 2px ${({ theme }) => theme.text};
  transition: color 1s ease;
  z-index: 1;

  @media (max-width: 640px) {
    font-size: 2.5rem;
    line-height: 3.5rem;
  }
`;

export const AreaLine = tw.div`w-full border-b-2 border-[#228b22] dark:border-white`;
export const RowWrap = tw.div`flex items-center gap-2`;
export const MainContainer = tw.div`relative h-[100dvh] overflow-y-auto scroll-smooth bg-[#f8f8f8] dark:bg-[#171717]`;

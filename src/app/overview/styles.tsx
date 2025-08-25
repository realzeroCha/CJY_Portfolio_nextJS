import styled from "styled-components";
import { TitleProps } from "./types";

export const Title = styled.div<TitleProps>`
  position: relative;
  width: 100%;
  margin-top: 20%;
  font-size: 6rem;
  line-height: 7.2rem;
  font-weight: 900;
  color: ${(p) => (p.$isEnd ? "transparent" : p.theme.text)};
  font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans CJK KR",
    sans-serif;
  -webkit-text-stroke: ${(p) => (p.$isEnd ? "3px" : "0px")}
    ${({ theme }) => theme.text};
  transition: color 1s ease;
  z-index: 1;

  @media (max-width: 900px) {
    font-size: 4rem;
    line-height: 5rem;
    -webkit-text-stroke: ${(p) => (p.$isEnd ? "2px" : "0px")}
      ${({ theme }) => theme.text};
  }
  @media (max-width: 640px) {
    font-size: 2.4rem;
    line-height: 3rem;
  }
  &::before {
    position: absolute;
    left: -0.5rem;
    transform: translateY(-2%);
    content: "${(p) => (p.$isEnd ? "FRONT-END\\A CHA JINYOUNG" : "")}";
    -webkit-text-stroke: 1px red;
    opacity: 0.25;
    animation: lineMove1 0.7s ease-in-out;
    animation-delay: 2.5s;
  }
  &::after {
    position: absolute;
    top: 2%;
    left: 0.5rem;
    content: "${(p) => (p.$isEnd ? "FRONT-END\\A CHA JINYOUNG" : "")}";
    -webkit-text-stroke: 1px blue;
    opacity: 0.25;
    animation: lineMove2 0.7s ease-in-out;
    animation-delay: 2.5s;
  }
`;

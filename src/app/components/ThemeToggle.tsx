"use client";

import styled from "styled-components";

type Props = {
  toggle: () => void;
  isDark: boolean;
};

const ToggleWrap = styled.button`
  position: fixed;
  top: 1.25rem;
  right: 2rem;
  width: 80px;
  height: fit-content;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 900;
  font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans CJK KR",
    sans-serif;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  color: transparent;
  z-index: 11;

  &:hover {
    -webkit-text-stroke: 1px #228b22;
  }

  @media (max-width: 640px) {
    top: 1rem;
    right: 1.5rem;
    width: 50px;
    font-size: 0.8rem;
    line-height: 1.4rem;
  }
`;

export const ThemeToggle = ({ toggle, isDark }: Props) => {
  if (typeof window === "undefined") return;

  return <ToggleWrap onClick={toggle}>{isDark ? "LIGHT" : "DARK"}</ToggleWrap>;
};

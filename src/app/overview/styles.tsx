import { TitleOverviewProps, TitleProps } from "./types";
import tw from "tailwind-styled-components";

// page
export const OverviewWrap = tw.main`relative flex h-[50vh] whitespace-pre-line sm:h-[80vh] space`;

// OverviewTitle
export const Cursor = tw.span`inline-block w-[1ch] blinking`;

export const Title = tw.h1<TitleProps>`
  relative w-full mt-[20%] font-black z-[1] transition-colors duration-500 ease-in-out [font-family:'Apple_SD_Gothic_Neo','Malgun_Gothic','Noto_Sans_CJK_KR',sans-serif]
  ${(p) =>
    p.$isEnd
      ? "text-transparent [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:3px_black] md:dark:[-webkit-text-stroke:3px_white]"
      : `text-black dark:text-white [-webkit-text-stroke:0px_black] dark:[-webkit-text-stroke:0px_white]`}
`;

export const TitleOverlay = tw.span<TitleOverviewProps>`
  absolute opacity-20 ${(p) =>
    p.$type === 0
      ? "-top-[1%] -left-2 [-webkit-text-stroke:1px_red] animate-[lineMove1_0.7s_ease-in-out_forwards]"
      : "top-[1%] left-2 [-webkit-text-stroke:1px_blue] animate-[lineMove2_0.7s_ease-in-out_forwards]"}
`;

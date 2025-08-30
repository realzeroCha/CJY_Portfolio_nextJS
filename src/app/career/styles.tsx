import tw from "tailwind-styled-components";
import { CareerWorkWrapProps } from "./types";

// Career
export const CareerWrap = tw.div`flex flex-col py-8 gap-20`;

// careerWork
export const CareerWorkWrap = tw.div<CareerWorkWrapProps>`flex flex-col gap-3
${(p) => (p.$index % 2 === 0 ? "self-start" : "self-end")}  transition-all
  duration-1000
  ease-out
  ${(p) =>
    p.$isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-[5rem] opacity-0"}`;
export const CareerWorkTitle = tw.div`text-[0.8rem] font-semibold text-black dark:text-white sm:text-[1.25rem]`;
export const CareerWorkContentWrap = tw.div`flex flex-col gap-2 pl-2 pb-4 sm:pl-4 sm:gap-3`;
export const CareerWorkContent = tw.p`text-[0.7rem] font-normal text-[#555] dark:text-[#cecece] sm:text-[1rem]`;

// careerItem
export const CareerListWrap = tw.div`flex flex-col gap-6 space`;
export const CareerTitle = tw.h4`text-black dark:text-white`;
export const CareerItemWrap = tw.article`flex flex-col gap-2 p-2 bg-white dark:bg-[#222222] shadow-xl rounded-[10] sm:p-6`;
export const CareerItemTitle = tw.h5`text-black dark:text-white`;
export const CareerItemPeriod = tw.p`text-[#999999] dark:text-[#cecece]`;
export const CareerDescriptionWrap = tw.div`flex flex-col gap-[10vh] px-3 pt-[10vh] pb-10 break-words sm:px-4 sm:gap-[20vh]`;
export const ProjectDescriptionWrap = tw.div`flex flex-col gap-2 m-1 px-3 break-words sm:px-4`;

// careerDescription
export const CareerDescriptionText = tw.p`relative leading-loos pl-3 before:content-['•'] before:absolute before:left-0 before:top-0 text-[#333] dark:text-[#cecece] sm:pl-4`;

import tw from "tailwind-styled-components";
import { CareerWorkWrapProps, FlipWrapProps } from "./types";

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
export const CareerItemWrap = tw.article`flex flex-col gap-2 p-3 bg-white dark:bg-[#222222] shadow-xl rounded-md sm:p-6`;
export const CareerItemTitle = tw.h5`text-black dark:text-white`;
export const CareerItemPeriod = tw.p`text-[#999999] dark:text-[#cecece]`;
export const CareerDescriptionWrap = tw.div`flex flex-col gap-[10vh] px-3 pt-[10vh] pb-10 break-words sm:px-4 sm:gap-[20vh]`;
export const ProjectDescriptionWrap = tw.div`flex flex-col gap-2 m-1 px-3 break-words sm:px-4`;

export const ProjectListWrap = tw.div`grid gap-4 lg:grid-cols-2 lg:gap-6`;

// flipCard
export const PerspectiveContainer = tw.div`
    group perspective
`;
export const FlipWrap = tw.div<FlipWrapProps>`
  relative w-full h-full transition-transform duration-700 preserve-3d ${(p) =>
    p.$flippable ? "group-hover:[transform:rotateX(180deg)]" : ""}
`;
export const FrontItem = tw.div`
    relative w-full h-full rounded-md backface-hidden
`;
export const BackItem = tw.div`
   absolute inset-0 flex items-center justify-center bg-white dark:bg-[#222222] rounded-md backface-hidden flip-x
`;
export const BackImg = tw.img`
    w-[70%] h-full object-cover
`;

// careerDescription
export const CareerDescriptionText = tw.p`relative leading-loos pl-3 before:content-['•'] before:absolute before:left-0 before:top-0 text-[#333] dark:text-[#cecece] sm:pl-4`;

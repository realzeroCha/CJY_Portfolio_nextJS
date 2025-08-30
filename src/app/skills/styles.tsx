import tw from "tailwind-styled-components";
import { LibraryItemProps } from "./types";

// Skills
export const SkillWrap = tw.div`my-6 sm:my-8 space`;
export const SkillTitle = tw.h4`text-black dark:text-white`;
export const SkillListWrap = tw.div`flex flex-wrap gap-3 sm:gap-4`;
export const LibraryListWrap = tw.div`flex flex-wrap gap-2 py-4`;

// SkillItem
export const SkillItemWrap = tw.article``;
export const SkillItemImg = tw.img`object-contain rounded-lg bg-white shadow-lg w-20 h-20 sm:p-4 sm:w-28 sm:h-28`;
export const SkillItemCaption = tw.p`text-[0.75rem] text-[#555555] dark:text-[#ededed] text-center font-semibold sm:text-[1rem]`;

// LibraryItem
export const LibraryItemWrap = tw.article<LibraryItemProps>`text-white px-3 py-1 rounded-lg shadow-lg font-semibold ${({
  $bgColor,
}) => `bg-[${$bgColor}]`}`;

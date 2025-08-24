import tw from "tailwind-styled-components";

export const AboutWrap = tw.div`my-8 flex flex-col gap-2`;
export const AboutListWrap = tw.div`mt-6 flex gap-4 flex-wrap justify-center`;
export const AboutTitle = tw.h3`ml-2 text-[#333333] dark:text-[#cecece] text-[0.8rem] font-normal break-all sm:ml-4 sm:text-[1.1rem]`;
export const AboutItem = tw.div`flex-1 min-w-[50vw] shadow-md border-[1px] border-[#bbbbbb] dark:border-white flex items-center gap-3 p-4 bg-white black:bg-[#222222] rounded-[5] text-[#333333] sm:flex-none text-[0.9rem] sm:text-[1rem]`;
export const AboutItemLink = tw.a`flex-1 min-w-[50vw] shadow-md border-[1px] border-[#bbbbbb] dark:border-white flex items-center gap-3 p-4 bg-white black:bg-[#222222] rounded-[5] text-[#333333] hover:text-[#228b22] transition-none sm:flex-none text-[0.9rem] sm:text-[1rem]`;
export const AboutImage = tw.img`rounded-full bg-white w-6 h-6 sm:w-8 sm:h-8`;
export const LinkImage = tw.img`ml-[-6px] w-3 h-3 sm:w-4 sm:h-4`;

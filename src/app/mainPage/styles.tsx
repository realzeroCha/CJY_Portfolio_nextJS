import tw from "tailwind-styled-components";

export const SectionTitle = tw.h1`
  relative w-full text-7xl leading-[4rem] font-extrabold pb-[6%] text-transparent
  font-['Apple_SD_Gothic_Neo','Malgun_Gothic','Noto_Sans_CJK_KR',sans-serif]
  [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white] transition-colors
  duration-1000 ease-out z-10
  sm:text-5xl sm:leading-[3.5rem]
`;

export const AreaLine = tw.div`w-full border-b-2 border-[#228b22] dark:border-white`;
export const RowWrap = tw.div`flex items-center gap-2`;
export const MainContainer = tw.div`relative h-[100dvh] overflow-y-auto scroll-smooth bg-[#f8f8f8] dark:bg-[#171717]`;

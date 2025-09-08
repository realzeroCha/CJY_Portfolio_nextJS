import tw from "tailwind-styled-components";

export const HeaderContainer = tw.header`sticky top-0 w-full bg-[#fbfbfb] dark:bg-[#171717] dark:border-black shadow-md z-10`;
export const HeaderWrap = tw.div`py-4 pl-6 pr-16 flex items-center justify-between sm:pl-20 sm:pr-32`;
export const HeaderTitle = tw.button`cursor-pointer font-semibold text-[#333333] dark:text-[#ededed] text-[1rem] font-SB_Aggro_M hover:text-[#228b22] dark:hover:text-[#228b22] sm:text-[1.25rem]`;
export const HeaderItemWrap = tw.div`flex gap-2 sm:gap-8`;
export const HeaderContent = tw.button`text-[1rem]/[1.5rem] font-extrabold font-['Apple_SD_Gothic_Neo','Malgun_Gothic','Noto_Sans_CJK_KR',sans-serif]
  [-webkit-text-stroke:1px_black] dark:[-webkit-text-stroke:1px_white] text-transparent hover:[-webkit-text-stroke:1px_#228b22]
  sm:text-[1.6rem]/[2.4rem] sm:w-15 sm:right-[4%]
`;

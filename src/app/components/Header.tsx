import { sectionList } from "@/app/util/data/headerData";
import tw from "tailwind-styled-components";

const HeaderContainer = tw.header`sticky top-0 w-full bg-white dark:bg-black dark:border-black shadow-md z-10`;
const HeaderWrap = tw.div`w-[80vw] mx-auto py-4 flex items-center justify-between sm:py-5`;
const HeaderTitle = tw.button`cursor-pointer font-semibold text-[#333333] dark:text-[#ededed] text-[1rem] font-SB_Aggro_M hover:text-[#228b22] dark:hover:text-[#228b22] sm:text-[1.25rem]`;
const HeaderItemWrap = tw.div`flex gap-4 sm:gap-8`;
const HeaderContent = tw.button`font-semibold text-[#333333] dark:text-[#ededed] font-SB_Aggro_L hover:text-[#228b22] dark:hover:text-[#228b22] text-[0.75rem] sm:text-[1rem]`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <HeaderTitle id={`topBtn`}>CJY</HeaderTitle>
        <HeaderItemWrap>
          {sectionList.map((item) => (
            <HeaderContent id={`${item.toLowerCase()}Btn`} key={item}>
              {item}
            </HeaderContent>
          ))}
        </HeaderItemWrap>
      </HeaderWrap>
    </HeaderContainer>
  );
};
export default Header;

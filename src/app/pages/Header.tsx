import tw from "tailwind-styled-components";

const HeaderContainer = tw.header`sticky top-0 w-full bg-black z-10`;
const HeaderWrap = tw.div`w-[80vw] mx-auto py-4 flex items-center justify-between sm:py-5`;
const HeaderTitle = tw.a`cursor-pointer font-semibold text-gray-150 text-[1rem] font-SB_Aggro_M hover:text-[#228b22] sm:text-[1.25rem]`;
const HeaderNav = tw.nav`flex gap-4 sm:gap-8`;
const HeaderContent = tw.a`cursor-pointer font-semibold text-gray-150 font-SB_Aggro_L hover:text-[#228b22] text-[0.75rem] sm:text-[1rem]`;

const Header = () => {
  const sectionList = ["ABOUT", "SKILLS", "CAREER"];

  return (
    <HeaderContainer>
      <HeaderWrap>
        <HeaderTitle href={`#top`}>CJY</HeaderTitle>
        <HeaderNav>
          {sectionList.map((item, index) => (
            <HeaderContent key={index} href={`#${item.toLowerCase()}`}>
              {item}
            </HeaderContent>
          ))}
        </HeaderNav>
      </HeaderWrap>
    </HeaderContainer>
  );
};
export default Header;

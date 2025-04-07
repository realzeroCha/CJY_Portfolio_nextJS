import tw from "tailwind-styled-components";

const HeaderContainer = tw.header`sticky top-0 w-full bg-black z-10`;
const HeaderWrap = tw.div`w-[80vw] mx-auto px-8 py-5 flex items-center justify-between`;
const HeaderTitle = tw.a`cursor-pointer font-semibold text-gray-150 text-[1.25rem] font-SB_Aggro_M hover:text-[#228b22]`;
const HeaderNav = tw.nav`flex gap-8`;
const HeaderContent = tw.a`cursor-pointer font-semibold text-gray-150 font-SB_Aggro_L hover:text-[#228b22]`;

const Header = () => {
  const sectionList = ["ABOUT", "SKILLS", "CAREER", "CONTACT"];

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

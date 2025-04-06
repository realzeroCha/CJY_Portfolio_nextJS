import tw from "tailwind-styled-components";

const HeaderContainer = tw.header`sticky top-0 w-full bg-black z-10`;
const HeaderWrap = tw.div`w-[80vw] mx-auto px-8 py-5 flex items-center justify-between`;
const HeaderTitle = tw.h2`font-semibold text-gray-150`;
const HeaderNav = tw.nav`flex gap-8`;
const HeaderContent = tw.a`cursor-pointer font-semibold text-gray-150 hover:text-[#228b22]`;

const Header = () => {
  const sectionList = ["ABOUT", "SKILLS", "CAREER", "CONTACT"];

  return (
    <HeaderContainer>
      <HeaderWrap>
        <HeaderTitle>CJY</HeaderTitle>
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

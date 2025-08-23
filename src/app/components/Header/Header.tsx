import { sectionList } from "@/app/util/data/headerData";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const HeaderContainer = tw.header`sticky top-0 w-full bg-[#f8f8f8] dark:bg-[#171717] dark:border-black shadow-md z-10`;
const HeaderWrap = tw.div`py-4 pl-6 pr-16 flex items-center justify-between sm:pl-20 sm:pr-32 sm:py-5`;
const HeaderTitle = tw.button`cursor-pointer font-semibold text-[#333333] dark:text-[#ededed] text-[1rem] font-SB_Aggro_M hover:text-[#228b22] dark:hover:text-[#228b22] sm:text-[1.25rem]`;
const HeaderItemWrap = tw.div`flex gap-2 sm:gap-8`;
const HeaderContent = styled.button`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 900;
  font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans CJK KR",
    sans-serif;
  -webkit-text-stroke: 1px ${({ theme }) => theme.text};
  color: transparent;

  &:hover {
    -webkit-text-stroke: 1px #228b22;
  }

  @media (max-width: 640px) {
    right: 4%;
    width: 60px;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

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

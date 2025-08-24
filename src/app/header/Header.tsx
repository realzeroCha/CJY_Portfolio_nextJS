import { sectionList } from "../../util/data/headerData";
import {
  HeaderContainer,
  HeaderContent,
  HeaderItemWrap,
  HeaderTitle,
  HeaderWrap,
} from "./styles";

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

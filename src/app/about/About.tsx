import { aboutData } from "../../util/data/aboutData";
import {
  AboutImage,
  AboutItemLink,
  AboutListWrap,
  AboutText,
  AboutTextImg,
  AboutTextWrap,
  AboutTitle,
  AboutTitleWrap,
  AboutWrap,
} from "./styles";
import { SectionTitle } from "../mainPage/styles";

const About = () => {
  return (
    <section id="about">
      <SectionTitle>ABOUT</SectionTitle>
      <AboutTextWrap>
        <AboutText>
          <AboutTextImg src={"/images/svg/ic_cake.svg"} alt="birth" />
          {aboutData.birth}
        </AboutText>
        <AboutText>
          <AboutTextImg src={"/images/svg/ic_home.svg"} alt="address" />
          {aboutData.address}
        </AboutText>
        <AboutText>
          <AboutTextImg src={"/images/svg/ic_education.svg"} alt="education" />
          {aboutData.education_info}
        </AboutText>
      </AboutTextWrap>
      <AboutListWrap>
        <AboutItemLink
          href={aboutData.git_address}
          target="_blink"
          rel="noopener noreferrer"
        >
          <AboutImage src={"/images/svg/ic_github.svg"} alt="github" />
        </AboutItemLink>
        <AboutItemLink
          href={aboutData.notion_address}
          target="_blink"
          rel="noopener noreferrer"
        >
          <AboutImage src={"/images/svg/ic_notion.svg"} alt="notion" />
        </AboutItemLink>
        <AboutItemLink
          href={`mailto:${aboutData.email}`}
          target="_blink"
          rel="noopener noreferrer"
        >
          <AboutImage src={"/images/svg/ic_mail.svg"} alt="email" />
        </AboutItemLink>
      </AboutListWrap>
      <AboutWrap>
        {aboutData.subtitle.map((subtitle: string, index: number) => (
          <AboutTitleWrap key={index} $index={index}>
            <AboutTitle>{subtitle}</AboutTitle>
          </AboutTitleWrap>
        ))}
      </AboutWrap>
    </section>
  );
};

About.displayName = "About";

export default About;

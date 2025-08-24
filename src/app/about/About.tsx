import { AreaLine, SectionTitle } from "../MainPage";
import { aboutData } from "../../util/data/aboutData";
import AnimatedText from "@/components/AnimatedView";
import { SectionProps } from "@/types/type";
import {
  AboutImage,
  AboutItem,
  AboutItemLink,
  AboutListWrap,
  AboutTitle,
  AboutWrap,
  LinkImage,
} from "./styles";

const About = ({ isView }: SectionProps) => {
  return (
    <section id="about">
      <AnimatedText>
        <SectionTitle>ABOUT</SectionTitle>
      </AnimatedText>
      <AreaLine />
      <AboutWrap>
        {aboutData.subtitle.map((subtitle: string, index: number) => (
          <AboutTitle key={index}>· {subtitle}</AboutTitle>
        ))}
        <AboutListWrap>
          <AboutItemLink
            href={aboutData.git_address}
            target="_blink"
            rel="noopener noreferrer"
          >
            <AboutImage src={"/images/svg/ic_github.svg"} alt="github" />
            {aboutData.git_address}
            <LinkImage src={"/images/svg/ic_link.svg"} alt="link" />
          </AboutItemLink>
          <AboutItemLink
            href={aboutData.notion_address}
            target="_blink"
            rel="noopener noreferrer"
          >
            <AboutImage src={"/images/svg/ic_notion.svg"} alt="notion" />
            {aboutData.notion_simple_address}
            <LinkImage src={"/images/svg/ic_link.svg"} alt="link" />
          </AboutItemLink>
          <AboutItem>
            <AboutImage src={"/images/svg/ic_mail.svg"} alt="email" />
            {aboutData.email}
          </AboutItem>
          <AboutItem>
            <AboutImage src={"/images/svg/ic_education.svg"} alt="education" />
            {aboutData.education_info}
          </AboutItem>
        </AboutListWrap>
      </AboutWrap>
    </section>
  );
};

About.displayName = "About";

export default About;

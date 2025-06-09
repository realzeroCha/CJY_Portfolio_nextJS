import tw from "tailwind-styled-components";
import { AreaLine, SectionTitle } from "./MainPage";
import { aboutData } from "../util/data/aboutData";
import AnimatedText from "../components/AnimatedView";

const AboutWrap = tw.div`my-8 flex flex-col gap-3`;
const AboutListWrap = tw.div`mt-6 flex gap-4 flex-wrap justify-center`;
const AboutTitle = tw.h3`ml-2 text-[#cecece] text-[0.8rem] font-normal break-all sm:ml-4 sm:text-[1.25rem]`;
const AboutItem = tw.div`flex-1 min-w-[50vw] flex items-center gap-3 p-4 bg-[#222222] rounded-[5] text-white sm:flex-none text-[0.9rem] sm:text-[1rem]`;
const AboutItemLink = tw.a`flex-1 min-w-[50vw] flex items-center gap-3 p-4 bg-[#222222] rounded-[5] text-[#cecece] hover:text-white sm:flex-none text-[0.9rem] sm:text-[1rem]`;
const AboutImage = tw.img`p-1 rounded-full bg-white w-6 h-6 sm:w-8 sm:h-8`;
const LinkImage = tw.img`ml-[-6px] w-3 h-3 sm:w-4 sm:h-4`;

const About = () => {
  return (
    <section id="about">
      <AnimatedText>
        <SectionTitle>ABOUT</SectionTitle>
      </AnimatedText>
      <AreaLine />
      <AboutWrap>
        {aboutData.subtitle.map((subtitle: string, index: number) => (
          <AboutTitle key={index}>{subtitle}</AboutTitle>
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

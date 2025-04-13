import tw from "tailwind-styled-components";
import { SectionTitle } from "./MainPage";
import { aboutData } from "../util/data/aboutData";

const AboutWrap = tw.div`my-8 flex flex-col gap-4`;
const AboutListWrap = tw.div`flex gap-4 flex-wrap justify-center`;
const AboutTitle = tw.h3`ml-4 text-[#cecece] text-[1.25rem] font-normal break-all`;
const AboutItem = tw.div`min-w-1/2 flex items-center gap-3 p-4 bg-[#222222] rounded-[5] text-white`;
const AboutItemLink = tw.a`min-w-1/2 flex items-center gap-3 p-4 bg-[#222222] rounded-[5] text-[#cecece] hover:text-white`;
const AboutImage = tw.img`p-1 rounded-full bg-white`;
const LinkImage = tw.img`ml-[-6px]`;

const About = () => {
  return (
    <section id="about">
      <SectionTitle>ABOUT</SectionTitle>
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
            <AboutImage
              src={"/images/svg/ic_github.svg"}
              alt="github"
              width={32}
              height={32}
            />
            {aboutData.git_address}
            <LinkImage
              src={"/images/svg/ic_link.svg"}
              alt="link"
              width={16}
              height={16}
            />
          </AboutItemLink>
          <AboutItem>
            <AboutImage
              src={"/images/svg/ic_mail.svg"}
              alt="email"
              width={32}
              height={32}
            />
            {aboutData.email}
          </AboutItem>
          <AboutItem>
            <AboutImage
              src={"/images/svg/ic_education.svg"}
              alt="education"
              width={32}
              height={32}
            />
            {aboutData.education_info}
          </AboutItem>
        </AboutListWrap>
      </AboutWrap>
    </section>
  );
};

About.displayName = "About";

export default About;

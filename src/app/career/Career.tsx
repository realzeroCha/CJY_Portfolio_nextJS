import tw from "tailwind-styled-components";
import AnimatedText from "../../components/AnimatedView";
import { SectionTitle } from "../mainPage/styles";
import { CareerList, ProjectList } from "@/util/data/careerData";
import CareerItem from "./CareerItem";
import ProjectItem from "./ProjectItem";

const CareerWrap = tw.div`flex flex-col py-8 gap-20`;

const Career = () => {
  return (
    <section id="career">
      <AnimatedText>
        <SectionTitle>CAREER</SectionTitle>
      </AnimatedText>
      <CareerWrap>
        <CareerItem list={CareerList} />
        <ProjectItem list={ProjectList} />
      </CareerWrap>
    </section>
  );
};

export default Career;

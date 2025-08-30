import { CareerList, ProjectList } from "@/util/data/careerData";
import AnimatedText from "../../components/AnimatedView";
import { SectionTitle } from "../mainPage/styles";
import CareerItem from "./CareerItem";
import ProjectItem from "./ProjectItem";
import { CareerWrap } from "./styles";

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

import tw from "tailwind-styled-components";
import Experiences from "./CareerItem";
import AnimatedText from "../../components/AnimatedView";
import { SectionTitle } from "../mainPage/styles";
import { CareerList, ProjectList } from "@/util/data/careerData";

const CareerWrap = tw.div`flex flex-col py-8 gap-20`;

const Career = () => {
  return (
    <section id="career">
      <AnimatedText>
        <SectionTitle>CAREER</SectionTitle>
      </AnimatedText>
      <CareerWrap>
        <Experiences list={CareerList} />
        <Experiences list={ProjectList} />
      </CareerWrap>
    </section>
  );
};

export default Career;

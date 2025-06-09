import { AreaLine, SectionTitle } from "../MainPage";
import { CareerList } from "../../util/data/careerData";
import tw from "tailwind-styled-components";
import Experiences from "./CareerItem";
import AnimatedText from "@/app/components/AnimatedView";

const CareerWrap = tw.div`flex flex-col py-8 gap-20`;

const Career = () => {
  return (
    <section id="career">
      <AnimatedText>
        <SectionTitle>CAREER</SectionTitle>
      </AnimatedText>
      <AreaLine />
      <CareerWrap>
        {CareerList.map((item, index) => (
          <Experiences key={index} item={item} index={index} />
        ))}
      </CareerWrap>
    </section>
  );
};

export default Career;

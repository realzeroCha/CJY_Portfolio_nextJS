import { CareerList } from "../../util/data/careerData";
import tw from "tailwind-styled-components";
import Experiences from "./CareerItem";
import AnimatedText from "../../components/AnimatedView";
import { SectionTitle } from "../mainPage/styles";

const CareerWrap = tw.div`flex flex-col py-8 gap-20`;

const Career = () => {
  return (
    <section id="career">
      <AnimatedText>
        <SectionTitle>CAREER</SectionTitle>
      </AnimatedText>
      <CareerWrap>
        {CareerList.map((item, index) => (
          <Experiences key={index} item={item} index={index} />
        ))}
      </CareerWrap>
    </section>
  );
};

export default Career;

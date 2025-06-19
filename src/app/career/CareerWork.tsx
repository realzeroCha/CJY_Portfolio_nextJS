import { DescriptionType } from "@/app/util/data/careerData";
import tw from "tailwind-styled-components";

const CareerWorkWrap = tw.details`flex flex-col gap-3`;
const CareerWorkTitle = tw.summary`text-[0.8rem] font-semibold text-[#333] dark:text-[#cecece] hover:text-[#228b22] dark:hover:text-white cursor-pointer sm:text-[1.25rem]`;
const CareerWorkContentWrap = tw.div`flex flex-col gap-2 pl-3 pb-4 sm:pl-6 sm:gap-3`;
const CareerWorkContent = tw.p`text-[0.7rem] font-normal text-[#555] dark:text-[#cecece] sm:text-[1rem]`;

interface WorkProps {
  description: DescriptionType;
}

const CareerWork = ({ description }: WorkProps) => {
  return (
    <CareerWorkWrap>
      <CareerWorkTitle>&nbsp;{description.description_title}</CareerWorkTitle>
      <CareerWorkContentWrap>
        {description.description_content.map((content, content_idx) => (
          <CareerWorkContent key={content_idx}>
            -&nbsp;&nbsp;{content}
          </CareerWorkContent>
        ))}
      </CareerWorkContentWrap>
    </CareerWorkWrap>
  );
};

export default CareerWork;

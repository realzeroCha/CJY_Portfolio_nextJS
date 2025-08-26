import { DescriptionType } from "@/util/data/careerData";
import tw from "tailwind-styled-components";

export type CareerWorkWrapProps = {
  $index: number;
};

const CareerWorkWrap = tw.div<CareerWorkWrapProps>`flex flex-col gap-3 
${(p) => (p.$index % 2 === 0 ? "self-start" : "self-end")}`;
const CareerWorkTitle = tw.div`text-[0.8rem] font-semibold text-[#333] dark:text-[#cecece] hover:text-[#228b22] dark:hover:text-white cursor-pointer sm:text-[1.25rem]`;
const CareerWorkContentWrap = tw.div`flex flex-col gap-2 pl-3 pb-4 sm:pl-6 sm:gap-3`;
const CareerWorkContent = tw.p`text-[0.7rem] font-normal text-[#555] dark:text-[#cecece] sm:text-[1rem]`;

interface WorkProps {
  description: DescriptionType;
  index: number;
}

const CareerWork = ({ description, index }: WorkProps) => {
  return (
    <CareerWorkWrap $index={index}>
      <CareerWorkTitle>&nbsp;{description.description_title}</CareerWorkTitle>
      <CareerWorkContentWrap>
        {description.description_content.map((content, content_idx) => (
          <CareerWorkContent key={content_idx}>{content}</CareerWorkContent>
        ))}
      </CareerWorkContentWrap>
    </CareerWorkWrap>
  );
};

export default CareerWork;

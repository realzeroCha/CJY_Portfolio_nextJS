import { DescriptionType } from "@/app/util/data/careerData";
import tw from "tailwind-styled-components";

const CareerWorkWrap = tw.details`flex flex-col gap-3`;
const CareerWorkTitle = tw.summary`text-[1.25rem] font-semibold text-[#cecece] hover:text-white cursor-pointer`;
const CareerWorkContentWrap = tw.div`flex flex-col gap-[6] pl-6 pb-4`;
const CareerWorkContent = tw.p`text-[1rem] font-normal text-[#cecece]`;

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

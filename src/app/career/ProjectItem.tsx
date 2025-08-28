import { CareerListType } from "@/util/data/careerData";
import Image from "next/image";
import tw from "tailwind-styled-components";
import { RowWrap } from "../mainPage/styles";
import CareerDescription from "./CareerDescription";

interface CareerItemProps {
  list: CareerListType;
}

const CareerListWrap = tw.div`flex flex-col gap-6`;
const CareerTitle = tw.h2`text-[1.25rem] font-bold text-black dark:text-white font-SB_Aggro_M sm:text-[2rem]`;
const CareerItemWrap = tw.article`flex flex-col gap-2 p-3 bg-white dark:bg-[#222222] shadow-xl rounded-[10] sm:p-6`;
const CareerItemTitle = tw.h3`text-[1rem] text-[#555555] dark:text-[#dedede] font-semibold sm:text-[1.25rem]`;
const CareerItemPeriod = tw.h5`text-[0.8rem] text-[#999999] dark:text-[#cecece] sm:text-[1rem]`;
const CareerDescriptionWrap = tw.div`flex flex-col gap-2 m-1 px-3 break-words sm:px-4`;

const ProjectItem = ({ list }: CareerItemProps) => {
  return (
    <CareerListWrap>
      <CareerTitle>{list.title}</CareerTitle>
      {list.careers.map((career, career_idx) => (
        <CareerItemWrap key={`${career.career_title}`}>
          <RowWrap>
            {career.url_path && (
              <Image
                src={career.url_path}
                width={36}
                height={36}
                alt={career.career_title}
              />
            )}
            <CareerItemTitle>{career.career_title}</CareerItemTitle>
          </RowWrap>
          {career.career_period && (
            <CareerItemPeriod>{career.career_period}</CareerItemPeriod>
          )}
          <CareerDescriptionWrap>
            {career.descriptions.map((description, description_idx) => {
              return (
                typeof description === "string" && (
                  <CareerDescription
                    key={`${career_idx}_${description_idx}`}
                    description={description}
                  />
                )
              );
            })}
          </CareerDescriptionWrap>
        </CareerItemWrap>
      ))}
    </CareerListWrap>
  );
};
export default ProjectItem;

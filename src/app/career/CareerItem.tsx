import Image from "next/image";
import tw from "tailwind-styled-components";
import { CareerListType } from "../util/data/careerData";
import { RowWrap } from "../MainPage";
import CareerDescription from "./CareerDescription";
import CareerWork from "./CareerWork";

interface CareerItemProps {
  item: CareerListType;
  index: number;
}

const CareerListWrap = tw.div`flex flex-col gap-6`;
const CareerTitle = tw.h2`text-[1.25rem] font-bold text-black dark:text-white font-SB_Aggro_M sm:text-[2rem]`;
const CareerItemWrap = tw.article`flex flex-col gap-2 p-2 bg-white dark:bg-[#222222] shadow-xl rounded-[10] sm:p-6`;
const CareerItemTitle = tw.h3`text-[1rem] text-[#555555] dark:text-[#dedede] font-semibold sm:text-[1.25rem]`;
const CareerItemPeriod = tw.h5`text-[0.8rem] text-[#999999] dark:text-[#cecece] sm:text-[1rem]`;
const CareerDescriptionWrap = tw.div`flex flex-col gap-2 m-1 px-3 border-l-2 border-[#777777] dark:border-[#cecece] break-words sm:m-2 sm:px-4`;

const CareerItem = ({ item, index }: CareerItemProps) => {
  return (
    <CareerListWrap key={index}>
      <CareerTitle>{item.title}</CareerTitle>
      {item.careers.map((career, career_idx) => (
        <CareerItemWrap key={`${index}_${career_idx}`}>
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
              return typeof description === "string" ? (
                <CareerDescription
                  key={`${index}_${career_idx}_${description_idx}`}
                  description={description}
                />
              ) : (
                <CareerWork
                  key={`${index}_${career_idx}_${description_idx}`}
                  description={description}
                ></CareerWork>
              );
            })}
          </CareerDescriptionWrap>
        </CareerItemWrap>
      ))}
    </CareerListWrap>
  );
};
export default CareerItem;

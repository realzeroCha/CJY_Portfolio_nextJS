import Image from "next/image";
import tw from "tailwind-styled-components";
import { CareerListType } from "../../util/data/careerData";
import { RowWrap } from "../MainPage";
import CareerDescription from "./CareerDescription";
import CareerWork from "./CareerWork";

interface CareerItemProps {
  item: CareerListType;
  index: number;
}

const CareerListWrap = tw.div`flex flex-col gap-6`;
const CareerTitle = tw.h2`text-[2rem] font-bold text-white font-SB_Aggro_M`;
const CareerItemWrap = tw.article`flex flex-col gap-2 p-6 bg-[#222222] rounded-[10]`;
const CareerItemTitle = tw.h3`text-[1.25rem] font-semibold`;
const CareerItemPeriod = tw.h5`text-[1rem] text-[#cecece]`;
const CarerrItemTagWrap = tw.div`flex gap-2 flex-wrap`;
const CareerItemTag = tw.p`px-3 py-0.5 text-[1rem] text-white font-semibold bg-[#228b22] rounded-[5]`;
const CareerDescriptionWrap = tw.div`flex flex-col gap-2 m-2 px-4 border-l-[2px] border-[#cecece] break-words`;

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
          <CareerItemPeriod>{career.career_period}</CareerItemPeriod>
          <CarerrItemTagWrap>
            {career.tags.map((tag, tag_idx) => (
              <CareerItemTag key={`${index}_${career_idx}_${tag_idx}`}>
                {tag}
              </CareerItemTag>
            ))}
          </CarerrItemTagWrap>
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

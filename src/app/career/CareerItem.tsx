import Image from "next/image";
import { RowWrap } from "../mainPage/styles";
import CareerDescription from "./CareerDescription";
import CareerWork from "./CareerWork";
import {
  CareerDescriptionWrap,
  CareerItemPeriod,
  CareerItemTitle,
  CareerItemWrap,
  CareerListWrap,
  CareerTitle,
} from "./styles";
import { CareerItemProps } from "./types";

const CareerItem = ({ list }: CareerItemProps) => {
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
              return typeof description === "string" ? (
                <CareerDescription
                  key={`${career_idx}_${description_idx}`}
                  description={description}
                />
              ) : (
                <CareerWork
                  key={`${career_idx}_${description_idx}`}
                  description={description}
                  index={description_idx}
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

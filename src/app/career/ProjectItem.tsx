import Image from "next/image";
import { RowWrap } from "../mainPage/styles";
import CareerDescription from "./CareerDescription";
import {
  BackImg,
  BackItem,
  CareerItemPeriod,
  CareerItemTitle,
  CareerItemWrap,
  CareerListWrap,
  CareerTitle,
  FlipWrap,
  FrontItem,
  PerspectiveContainer,
  ProjectDescriptionWrap,
  ProjectListWrap,
} from "./styles";
import { CareerItemProps } from "./types";

const ProjectItem = ({ list }: CareerItemProps) => {
  return (
    <CareerListWrap>
      <CareerTitle>{list.title}</CareerTitle>
      <ProjectListWrap>
        {list.careers.map((career, career_idx) => (
          <PerspectiveContainer key={`${career.career_title}`}>
            <FlipWrap $flippable={!!career.img_url}>
              <FrontItem>
                <CareerItemWrap>
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
                  <ProjectDescriptionWrap>
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
                  </ProjectDescriptionWrap>
                </CareerItemWrap>
              </FrontItem>
              <BackItem>
                {career.img_url && (
                  <BackImg src={career.img_url} alt="project_img" />
                )}
              </BackItem>
            </FlipWrap>
          </PerspectiveContainer>
        ))}
      </ProjectListWrap>
    </CareerListWrap>
  );
};
export default ProjectItem;

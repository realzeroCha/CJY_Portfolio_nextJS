import tw from "tailwind-styled-components";
import { skillList } from "../../util/data/skillData";
import LibraryItem from "./LibraryItem";
import SkillItem from "./SkillItem";
import { SectionTitle } from "../MainPage";

const SkillWrap = tw.div`my-8`;
const SkillTitle = tw.h2`text-[2rem] pb-2 font-bold font-SB_Aggro_M`;
const SkillListWrap = tw.div`flex flex-wrap gap-4`;
const LibraryListWrap = tw.div`flex flex-wrap gap-2 py-4`;

const Skills = () => {
  return (
    <section id="skills">
      <SectionTitle>SKILLS</SectionTitle>
      {skillList.map((category, index) => (
        <SkillWrap key={index}>
          <SkillTitle>{category.title}</SkillTitle>
          <SkillListWrap>
            {category.skills.map((item, itemIdx) => (
              <SkillItem
                key={`${item}_${itemIdx}`}
                item={item}
                index={itemIdx}
              />
            ))}
          </SkillListWrap>
          {category.librarys && (
            <LibraryListWrap>
              {category.librarys.map((item, itemIdx) => (
                <LibraryItem
                  key={`${item}_${itemIdx}`}
                  item={item}
                  index={itemIdx}
                />
              ))}
            </LibraryListWrap>
          )}
        </SkillWrap>
      ))}
    </section>
  );
};

export default Skills;

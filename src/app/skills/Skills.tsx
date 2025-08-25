import tw from "tailwind-styled-components";
import { skillList } from "../../util/data/skillData";
import LibraryItem from "./LibraryItem";
import SkillItem from "./SkillItem";
import AnimatedText from "../../components/AnimatedView";
import { SectionTitle } from "../mainPage/styles";

const SkillWrap = tw.div`my-6 sm:my-8`;
const SkillTitle = tw.h2`text-[1.25rem] text-[#333333] dark:text-[#ededed] pb-2 font-bold font-SB_Aggro_M sm:text-[2rem]`;
const SkillListWrap = tw.div`flex flex-wrap gap-3 sm:gap-4`;
const LibraryListWrap = tw.div`flex flex-wrap gap-2 py-4`;

const Skills = () => {
  return (
    <section id="skills">
      <AnimatedText>
        <SectionTitle>SKILLS</SectionTitle>
      </AnimatedText>
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

import tw from "tailwind-styled-components";
import { skillList } from "../util/data/skillData";
import LibraryItem from "./LibraryItem";
import SkillItem from "./SkillItem";

const SkillWrap = tw.div`my-4`;
const SkillTitle = tw.h2`text-[1.5rem] pb-2 font-bold`;
const SkillListWrap = tw.div`flex flex-wrap gap-4`;
const LibraryListWrap = tw.div`flex flex-wrap gap-2 py-4`;

const Skills = () => {
  return (
    <section id="skills">
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

import AnimatedText from "../../components/AnimatedView";
import { skillList } from "../../util/data/skillData";
import { SectionTitle } from "../mainPage/styles";
import LibraryItem from "./LibraryItem";
import SkillItem from "./SkillItem";
import {
  LibraryListWrap,
  SkillListWrap,
  SkillTitle,
  SkillWrap,
} from "./styles";

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

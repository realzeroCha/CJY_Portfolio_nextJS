import { SkillItemCaption, SkillItemImg, SkillItemWrap } from "./styles";
import { skillProps } from "./types";

const SkillItem = ({ item, index }: skillProps) => {
  return (
    <SkillItemWrap key={index}>
      <SkillItemImg src={item.url_path} alt={item.name} />
      <SkillItemCaption>{item.name}</SkillItemCaption>
    </SkillItemWrap>
  );
};

export default SkillItem;

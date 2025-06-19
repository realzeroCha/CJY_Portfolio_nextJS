import tw from "tailwind-styled-components";
import { SkillType } from "../util/data/skillData";

interface skillProps {
  item: SkillType;
  index: number;
}

const SkillItemWrap = tw.article``;
const SkillItemImg = tw.img`object-contain rounded-lg bg-white shadow-lg w-20 h-20 sm:p-4 sm:w-28 sm:h-28`;
const SkillItemCaption = tw.h5`text-[0.75rem] text-[#555555] dark:text-[#ededed] text-center font-semibold sm:text-[1rem]`;

const SkillItem = ({ item, index }: skillProps) => {
  return (
    <SkillItemWrap key={index}>
      <SkillItemImg src={item.url_path} alt={item.name} />
      <SkillItemCaption>{item.name}</SkillItemCaption>
    </SkillItemWrap>
  );
};

export default SkillItem;

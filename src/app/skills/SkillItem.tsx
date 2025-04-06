import tw from "tailwind-styled-components";
import { SkillType } from "../util/data/skillData";

interface skillProps {
  item: SkillType;
  index: number;
}

const SkillItemWrap = tw.div``;
const SkillItemImg = tw.img`p-4 object-contain rounded-lg bg-white`;
const SkillItemCaption = tw.h5`text-center font-semibold`;

const SkillItem = ({ item, index }: skillProps) => {
  return (
    <SkillItemWrap key={index}>
      <SkillItemImg
        src={item.url_path}
        alt={item.name}
        width={110}
        height={110}
      />
      <SkillItemCaption>{item.name}</SkillItemCaption>
    </SkillItemWrap>
  );
};

export default SkillItem;

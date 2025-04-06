import tw from "tailwind-styled-components";
import { LibraryType } from "../util/data/skillData";

interface libraryProps {
  item: LibraryType;
  index: number;
}

interface LibraryItemProps {
  $bgColor: string;
}

const LibraryItemWrap = tw.div<LibraryItemProps>`px-3 py-1 rounded-lg font-semibold ${({
  $bgColor,
}) => `bg-[${$bgColor}]`}`;

const LibraryItem = ({ item, index }: libraryProps) => {
  return (
    <LibraryItemWrap key={index} $bgColor={item.color}>
      {item.name}
    </LibraryItemWrap>
  );
};

export default LibraryItem;

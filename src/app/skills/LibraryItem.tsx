import { LibraryItemWrap } from "./styles";
import { libraryProps } from "./types";

const LibraryItem = ({ item, index }: libraryProps) => {
  return (
    <LibraryItemWrap key={index} $bgColor={item.color}>
      {item.name}
    </LibraryItemWrap>
  );
};

export default LibraryItem;

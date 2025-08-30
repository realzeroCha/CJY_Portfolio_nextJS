import { LibraryType, SkillType } from "@/util/data/skillData";

export interface skillProps {
  item: SkillType;
  index: number;
}

export interface libraryProps {
  item: LibraryType;
  index: number;
}

export interface LibraryItemProps {
  $bgColor: string;
}

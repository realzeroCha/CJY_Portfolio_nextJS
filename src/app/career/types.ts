import { CareerListType, DescriptionType } from "@/util/data/careerData";

// style
export type CareerWorkWrapProps = {
  $index: number;
  $isVisible: boolean;
};

export interface CareerItemProps {
  list: CareerListType;
}

export interface WorkProps {
  description: DescriptionType;
  index: number;
}

export interface DescriptionProps {
  description: string;
}

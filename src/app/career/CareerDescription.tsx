import { CareerDescriptionText } from "./styles";
import { DescriptionProps } from "./types";

const CareerDescription = ({ description }: DescriptionProps) => {
  return <CareerDescriptionText>{description}</CareerDescriptionText>;
};

export default CareerDescription;

import tw from "tailwind-styled-components";

const CareerDescriptionText = tw.p`relative leading-loos pl-4 before:content-['•'] before:absolute before:left-0 before:top-0 text-[#cecece]`;

interface DescriptionProps {
  description: string;
}

const CareerDescription = ({ description }: DescriptionProps) => {
  return <CareerDescriptionText>{description}</CareerDescriptionText>;
};

export default CareerDescription;

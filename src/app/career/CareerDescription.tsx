import tw from "tailwind-styled-components";

const CareerDescriptionText = tw.p`relative leading-loos pl-3 before:content-['•'] before:absolute before:left-0 before:top-0 text-[#333] dark:text-[#cecece] text-[0.75rem] sm:pl-4 sm:text-[1rem]`;

interface DescriptionProps {
  description: string;
}

const CareerDescription = ({ description }: DescriptionProps) => {
  return <CareerDescriptionText>{description}</CareerDescriptionText>;
};

export default CareerDescription;

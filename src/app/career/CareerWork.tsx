import { DescriptionType } from "@/util/data/careerData";
import { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";

export type CareerWorkWrapProps = {
  $index: number;
  $isVisible: boolean;
};

const CareerWorkWrap = tw.div<CareerWorkWrapProps>`flex flex-col gap-3
${(p) => (p.$index % 2 === 0 ? "self-start" : "self-end")}  transition-all
  duration-1000
  ease-out
  ${(p) =>
    p.$isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-[5rem] opacity-0"}`;
const CareerWorkTitle = tw.div`text-[0.8rem] font-semibold text-black dark:text-white sm:text-[1.25rem]`;
const CareerWorkContentWrap = tw.div`flex flex-col gap-2 pl-2 pb-4 sm:pl-4 sm:gap-3`;
const CareerWorkContent = tw.p`text-[0.7rem] font-normal text-[#555] dark:text-[#cecece] sm:text-[1rem]`;

interface WorkProps {
  description: DescriptionType;
  index: number;
}

const CareerWork = ({ description, index }: WorkProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const careerWorkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (careerWorkRef.current) {
      observer.observe(careerWorkRef.current);
    }

    return () => {
      if (careerWorkRef.current) {
        observer.unobserve(careerWorkRef.current);
      }
    };
  }, []);

  return (
    <CareerWorkWrap $index={index} $isVisible={isVisible} ref={careerWorkRef}>
      <CareerWorkTitle>&nbsp;{description.description_title}</CareerWorkTitle>
      <CareerWorkContentWrap>
        {description.description_content.map((content, content_idx) => (
          <CareerWorkContent key={content_idx}>{content}</CareerWorkContent>
        ))}
      </CareerWorkContentWrap>
    </CareerWorkWrap>
  );
};

export default CareerWork;

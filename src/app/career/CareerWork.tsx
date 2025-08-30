import { useEffect, useRef, useState } from "react";
import {
  CareerWorkContent,
  CareerWorkContentWrap,
  CareerWorkTitle,
  CareerWorkWrap,
} from "./styles";
import { WorkProps } from "./types";

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

import { DescriptionType } from "@/util/data/careerData";
import { useEffect, useRef, useState } from "react";

interface HorizontalScrollProps {
  list: DescriptionType[];
}

export const useHorizontalScroll = ({ list }: HorizontalScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeListIndex, setActiveListIndex] = useState<number | null>(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const currentListLength =
    activeListIndex !== null
      ? list[activeListIndex].description_content.length
      : 0;

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (activeListIndex === null) return;

      e.preventDefault();
      if (e.deltaY > 0) {
        setCurrentItemIndex((prev) => {
          if (prev < currentListLength - 1) {
            return prev + 1;
          } else {
            setActiveListIndex(null);
            return prev;
          }
        });
      } else if (e.deltaY < 0) {
        setCurrentItemIndex((prev) => (prev > 0 ? prev - 1 : 0));
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeListIndex, currentListLength]);

  return {
    containerRef,
    currentItemIndex,
  };
};

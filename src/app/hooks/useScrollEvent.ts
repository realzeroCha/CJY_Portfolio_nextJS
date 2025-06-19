"use client";

// 버튼 스크롤 이벤트
export const useScrollEvent = () => {
  return (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
};

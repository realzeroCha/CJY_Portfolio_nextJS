"use client";

import tw from "tailwind-styled-components";
import About from "./About";
import Footer from "./Footer";
import Career from "./career/Career";
import { ClickEventHeader } from "./client/ClickEventHeader";
import Header from "./components/Header/Header";
import Overview from "./overview/page";
import Skills from "./skills/Skills";
import { useState } from "react";
import SplashView from "./splash/SplashView";
import { SectionWrapper } from "./components/SectionWrap";

export const SectionTitle = tw.h1`w-full text-[1.5rem] font-bold text-black dark:text-white py-2 font-SB_Aggro_B sm:text-[2.5rem] sm:py-4`;
export const AreaLine = tw.div`w-full border-b-2 border-[#228b22] dark:border-white`;
export const RowWrap = tw.div`flex items-center gap-2`;
const MainContainer = tw.div`relative h-[100dvh] overflow-y-auto scroll-smooth bg-[#f8f8f8] dark:bg-[#171717]`;

const MainPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return isLoading ? (
    <SplashView setIsLoading={setIsLoading} />
  ) : (
    <MainContainer>
      <ClickEventHeader />
      <div id="top" />
      <Header />
      <SectionWrapper>
        {(isView) => <Overview isView={isView} />}
      </SectionWrapper>
      <About />
      <Skills />
      <Career />
      <Footer />
    </MainContainer>
  );
};
export default MainPage;

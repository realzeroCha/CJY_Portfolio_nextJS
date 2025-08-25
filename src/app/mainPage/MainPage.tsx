"use client";

import { useState } from "react";
import { SectionWrapper } from "../../components/SectionWrap";
import About from "../about/About";
import Career from "../career/Career";
import { ClickEventHeader } from "../client/ClickEventHeader";
import Footer from "../Footer";
import Header from "../header/Header";
import Overview from "../overview/page";
import Skills from "../skills/Skills";
import SplashView from "../splash/SplashView";
import { MainContainer } from "./styles";

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
      <SectionWrapper>{(isView) => <About isView={isView} />}</SectionWrapper>
      <Skills />
      <Career />
      <Footer />
    </MainContainer>
  );
};
export default MainPage;

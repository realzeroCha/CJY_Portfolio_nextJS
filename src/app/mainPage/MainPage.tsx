"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import About from "../about/About";
import Career from "../career/Career";
import Footer from "../footer/Footer";
import { ClickEventHeader } from "../header/client/ClickEventHeader";
import Header from "../header/Header";
import Overview from "../overview/page";
import Skills from "../skills/Skills";
import { MainContainer } from "./styles";

const SplashView = dynamic(() => import("../splash/SplashView"), {
  ssr: false,
});

const MainPage = () => {
  // const [isClient, setIsClient] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  // setIsClient(true);
  // }, []);

  const renderMain = () => (
    <MainContainer>
      <ClickEventHeader />
      <div id="top" />
      <Header />
      <Overview />
      <About />
      <Skills />
      <Career />
      <Footer />
    </MainContainer>
  );

  // if (!isClient) return renderMain();
  return isLoading ? <SplashView setIsLoading={setIsLoading} /> : renderMain();
};
export default MainPage;

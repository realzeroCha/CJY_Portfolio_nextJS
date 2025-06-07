import tw from "tailwind-styled-components";
import Header from "../components/Header";
import About from "./About";
import Footer from "./Footer";
import SideButton from "./SideButton";
import Career from "./career/Career";
import Overview from "./overview/page";
import Skills from "./skills/Skills";
import { ClickEventHeader } from "../client/ClickEventHeader";

export const SectionTitle = tw.h1`w-full text-[1.5rem] font-bold text-white py-2 border-b-[2px] border-white font-SB_Aggro_B sm:text-[2.5rem] sm:py-4]`;
export const RowWrap = tw.div`flex items-center gap-2`;
const MainContainer = tw.div`relative h-[100dvh] overflow-y-auto scroll-smooth`;

const MainPage = () => {
  return (
    <MainContainer>
      <div id="top" />
      <Header />
      <ClickEventHeader />
      <Overview />
      <About />
      <Skills />
      <Career />
      <Footer />
      <SideButton />
    </MainContainer>
  );
};
export default MainPage;

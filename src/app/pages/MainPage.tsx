import tw from "tailwind-styled-components";
import About from "./About";
import Career from "./career/Career";
import Footer from "./Footer";
import Header from "./Header";
import Overview from "./Overview";
import Skills from "./skills/Skills";
import SideButton from "./SideButton";

export const SectionTitle = tw.h1`w-full text-[2.5rem] font-bold text-white py-4 border-b-[2px] border-white font-SB_Aggro_B`;
export const RowWrap = tw.div`flex items-center gap-2`;
const MainContainer = tw.div`relative h-[100dvh] overflow-y-auto scroll-smooth`;
const Top = tw.div``;

const MainPage = () => {
  return (
    <MainContainer>
      <Top id="top" />
      <Header />
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

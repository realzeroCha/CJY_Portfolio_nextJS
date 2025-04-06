import tw from "tailwind-styled-components";
import About from "./About";
import Career from "./Career";
import Header from "./Header";
import Overview from "./Overview";
import Projects from "./Career";
import Skills from "./skills/Skills";
import Footer from "./Footer";

const MainContainer = tw.div`relative h-[100dvh] overflow-y-auto scroll-smooth`;

const MainPage = () => {
  return (
    <MainContainer>
      <Header />
      <Overview />
      <About />
      <Skills />
      <Projects />
      <Career />
      <Footer />
    </MainContainer>
  );
};
export default MainPage;

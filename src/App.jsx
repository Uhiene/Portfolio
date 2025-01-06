import Preloader from "./components/preloader";
import PageWrap from "./components/PageWrap";

import useSmoothScroll from "./components/useSmoothScroll";

import MyWorks from "./components/section/MyWorks";
import HeroSection from "./components/Section/HeroSection";
import AboutSection from "./components/Section/AboutSection";
import ContactSection from "./components/section/ContactSection";

const App = () => {
  useSmoothScroll();
  return (
    <div>
      <Preloader />
        <PageWrap>
        <HeroSection />
        <AboutSection />
        <MyWorks />
        <ContactSection />
      </PageWrap>
    </div>
  );
};

export default App;

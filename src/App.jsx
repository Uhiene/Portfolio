import Preloader from "./components/layout/Preloader";

import useSmoothScroll from "./components/layout/useSmoothScroll";

import MyWorks from "./components/section/MyWorks";
import HeroSection from "./components/Section/HeroSection";
import AboutSection from "./components/Section/AboutSection";
import ContactSection from "./components/section/ContactSection";
import { useEffect } from "react";
import PageWrap from "./components/layout/PageWrap";

const App = () => {
  useSmoothScroll();
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

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

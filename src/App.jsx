import React from 'react'
import Preloader from './components/preloader'
import PageWrap from './components/PageWrap'
import Header from './components/Header'

import IntroSection from './components/IntroSection'
import AboutSection from './components/AboutSection'
import Works from './components/Works'
import ContactSection from './components/ContactSection'
import useSmoothScroll from './components/useSmoothScroll'

const App = () => {
  useSmoothScroll();
  return (
    <div>
      <Preloader/>
      <PageWrap>
        <Header/>
        <IntroSection/>
        <AboutSection/>
        <Works/>
        <ContactSection/>
      </PageWrap>
    </div>
  )
}

export default App
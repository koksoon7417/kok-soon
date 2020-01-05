import React, { Component } from 'react';
import LandingPage from '@pages/LandingPage';
import AboutPage from '@pages/AboutPage';
import PortfolioPage from '@pages/PortfolioPage';
import ParallaxBackground from '@components/ParallaxBackground';
import ScrollTop from '@components/ScrollTop';
import ThemeSwitcher from '@components/ThemeSwitcher';
import Browser from '@components/Browser';

class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
        <meta prefix="og: http://ogp.me/ns#" property="og:title" content="My Portfolio" />
        <meta prefix="og: http://ogp.me/ns#" property="og:type" content="video.movie" />
        <meta prefix="og: http://ogp.me/ns#" property="og:image" content="http://www.frogsonwheels.net/wp-content/uploads/2013/11/Linker-Logo-300x300px-01.png" />
        <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://koksoon7417.github.io/kok-soon/" />
        <meta prefix="og: http://ogp.me/ns#" property="og:description" content="This is my portfolio." />

        <ThemeSwitcher>
          <Browser except firefox>
            <ParallaxBackground />
          </Browser>
          <LandingPage />
          <AboutPage />
          <PortfolioPage />
          <ScrollTop />
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;

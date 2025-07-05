
import { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ExploreSection from '../components/ExploreSection';
import AboutSection from '../components/AboutSection';
import TheySaidSection from '../components/TheySaidSection';
import Footer from '../components/Footer';
import BackgroundAnimations from '../components/BackgroundAnimations';

const Index = () => {
  // Background animation controls - you can adjust these values
  const [bgAnimationConfig] = useState({
    opacity: 0.12,
    showConcentric: true,
    showCurves: true,
    animationSpeed: 1
  });

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Animations */}
      <BackgroundAnimations
        opacity={bgAnimationConfig.opacity}
        showConcentric={bgAnimationConfig.showConcentric}
        showCurves={bgAnimationConfig.showCurves}
        animationSpeed={bgAnimationConfig.animationSpeed}
      />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ExploreSection />
        <AboutSection />
        <TheySaidSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;


import { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ExploreSection from '../components/ExploreSection';
import AboutSection from '../components/AboutSection';
import TheySaidSection from '../components/TheySaidSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExploreSection />
      <AboutSection />
      <TheySaidSection />
      <Footer />
    </div>
  );
};

export default Index;

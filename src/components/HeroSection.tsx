
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';

const characters = [
  {
    id: 1,
    name: "KAMADO TANJIRO",
    description: "This will contain short background story of or description about Tanjiro Kamado",
    image: "/lovable-uploads/4254a7da-85ef-4708-9fc4-66d58522597f.png"
  },
  {
    id: 2,
    name: "NEZUKO KAMADO",
    description: "A demon who retained her humanity and fights alongside her brother",
    image: "/lovable-uploads/b1fa2537-2501-497e-a5ce-65e2097d94dc.png"
  },
  {
    id: 3,
    name: "GIYU TOMIOKA",
    description: "Water Hashira known for his calm demeanor and powerful techniques",
    image: "/lovable-uploads/4b061953-890d-4607-afb7-8a1b1f03f6ad.png"
  },
  {
    id: 4,
    name: "INOSUKE HASHIBIRA",
    description: "Beast Breathing user with wild fighting style and boar mask",
    image: "/lovable-uploads/db638674-c0e8-423a-94ed-8ca7cc479f57.png"
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setExpandedCard((prev) => (prev + 1) % characters.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % characters.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const scrollToExplore = () => {
    const element = document.getElementById('explore');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#780000] overflow-hidden pt-20">
      {/* Animated Avocado-shaped Background Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 animate-spin" style={{ animationDuration: '30s' }}>
          <svg width="300" height="400" viewBox="0 0 300 400" className="stroke-white fill-none stroke-1">
            <path d="M150 50 Q100 80 80 150 Q80 250 120 320 Q150 360 180 320 Q220 250 220 150 Q200 80 150 50 Z" />
            <path d="M150 60 Q110 90 90 150 Q90 240 125 310 Q150 340 175 310 Q210 240 210 150 Q190 90 150 60 Z" />
            <path d="M150 70 Q120 100 100 150 Q100 230 130 300 Q150 320 170 300 Q200 230 200 150 Q180 100 150 70 Z" />
            <path d="M150 80 Q130 110 110 150 Q110 220 135 290 Q150 300 165 290 Q190 220 190 150 Q170 110 150 80 Z" />
          </svg>
        </div>

        <div className="absolute bottom-20 right-10 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
          <svg width="250" height="350" viewBox="0 0 250 350" className="stroke-white fill-none stroke-1">
            <path d="M125 40 Q85 65 70 125 Q70 200 100 260 Q125 290 150 260 Q180 200 180 125 Q165 65 125 40 Z" />
            <path d="M125 50 Q95 75 80 125 Q80 190 105 250 Q125 270 145 250 Q170 190 170 125 Q155 75 125 50 Z" />
            <path d="M125 60 Q105 85 90 125 Q90 180 110 240 Q125 250 140 240 Q160 180 160 125 Q145 85 125 60 Z" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '40s' }}>
          <svg width="200" height="280" viewBox="0 0 200 280" className="stroke-white fill-none stroke-1">
            <path d="M100 30 Q70 50 60 100 Q60 160 85 210 Q100 230 115 210 Q140 160 140 100 Q130 50 100 30 Z" />
            <path d="M100 40 Q80 60 70 100 Q70 150 90 200 Q100 210 110 200 Q130 150 130 100 Q120 60 100 40 Z" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex items-center">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-[#85E912] transition-colors z-20"
        >
          <ArrowLeft className="w-8 h-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-[#85E912] transition-colors z-20"
        >
          <ArrowRight className="w-8 h-8" />
        </button>

        {/* Character Cards Carousel */}
        <div className="flex items-center justify-center w-full space-x-4">
          {characters.map((character, index) => {
            const isExpanded = expandedCard === index;
            const relativeIndex = (index - currentIndex + characters.length) % characters.length;
            
            return (
              <div
                key={character.id}
                className={`relative transition-all duration-700 ease-in-out cursor-pointer ${
                  isExpanded 
                    ? 'w-80 h-80' 
                    : 'w-48 h-80'
                } ${
                  relativeIndex === 0 ? 'opacity-100' : 
                  relativeIndex === 1 || relativeIndex === characters.length - 1 ? 'opacity-80' : 
                  'opacity-40'
                }`}
                onMouseEnter={() => {
                  setIsHovered(true);
                  setExpandedCard(index);
                }}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Card Image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Expanded Content */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${
                    isExpanded ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2 tracking-wider">
                        {character.name}
                      </h3>
                      <p className="text-sm opacity-90 backdrop-blur-sm bg-black/20 p-2 rounded inline-block">
                        {character.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {characters.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-[#85E912]' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Scroll to Explore Button */}
        <button
          onClick={scrollToExplore}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#85E912] text-black px-6 py-3 rounded-full hover:bg-[#6BB00F] transition-colors flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
        >
          Explore More
          <div className="animate-bounce">
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

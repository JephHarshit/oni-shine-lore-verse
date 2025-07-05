
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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

  return (
    <section 
      className="relative min-h-screen bg-[#780000] overflow-hidden pt-20"
      style={{
        background: `#780000`
      }}
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full animate-pulse delay-500"></div>
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
                      <p className="text-sm opacity-90 backdrop-blur-sm bg-black/20 p-2 rounded">
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
      </div>
    </section>
  );
};

export default HeroSection;

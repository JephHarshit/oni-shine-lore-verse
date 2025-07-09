
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  },
  {
    id: 5,
    name: "RENGOKU KYOJURO",
    description: "Flame Hashira with fiery determination and unwavering spirit",
    image: "/lovable-uploads/4254a7da-85ef-4708-9fc4-66d58522597f.png"
  },
  {
    id: 6,
    name: "SHINOBU KOCHO",
    description: "Insect Hashira known for her poison techniques and gentle smile",
    image: "/lovable-uploads/b1fa2537-2501-497e-a5ce-65e2097d94dc.png"
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => (prev + 1) % characters.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

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

  const getVisibleCards = () => {
    const visibleCards = [];
    const totalCards = characters.length;
    
    // Desktop: 4 cards, Tablet: 3 cards, Mobile: 2 cards
    const cardsToShow = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2;
    
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % totalCards;
      visibleCards.push(characters[index]);
    }
    
    return visibleCards;
  };

  const handleCharacterClick = (characterId: number) => {
    navigate(`/character/${characterId}`);
  };

  return (
    <section className="relative min-h-screen bg-[#780000] overflow-hidden pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="text-white hover:text-[#85E912] transition-colors z-20 bg-black/30 rounded-full p-3 hover:bg-black/50 flex-shrink-0"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>

          {/* Character Cards Container */}
          <div className="flex-1 mx-8 overflow-hidden">
            <div 
              className="flex items-center justify-center transition-transform duration-700 ease-in-out"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Desktop: 4 cards */}
              <div className="hidden lg:flex items-center justify-center space-x-4 w-full">
                {getVisibleCards().map((character, index) => {
                  const isExpanded = expandedCard === ((currentIndex + index) % characters.length);
                  
                  return (
                    <div
                      key={`${character.id}-${currentIndex}-${index}`}
                      className={`relative transition-all duration-700 ease-in-out cursor-pointer ${
                        isExpanded ? 'w-72 h-80' : 'w-56 h-80'
                      }`}
                      onMouseEnter={() => {
                        setIsHovered(true);
                        setExpandedCard((currentIndex + index) % characters.length);
                      }}
                      onClick={() => handleCharacterClick(character.id)}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <img
                          src={character.image}
                          alt={character.name}
                          className="w-full h-full object-cover"
                        />
                        
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${
                          isExpanded ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-lg font-bold mb-2 tracking-wider">
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

              {/* Tablet: 3 cards */}
              <div className="hidden md:flex lg:hidden items-center justify-center space-x-4 w-full">
                {getVisibleCards().map((character, index) => {
                  const isExpanded = expandedCard === ((currentIndex + index) % characters.length);
                  
                  return (
                    <div
                      key={`${character.id}-${currentIndex}-${index}`}
                      className={`relative transition-all duration-700 ease-in-out cursor-pointer ${
                        isExpanded ? 'w-72 h-80' : 'w-60 h-80'
                      }`}
                      onMouseEnter={() => {
                        setIsHovered(true);
                        setExpandedCard((currentIndex + index) % characters.length);
                      }}
                      onClick={() => handleCharacterClick(character.id)}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <img
                          src={character.image}
                          alt={character.name}
                          className="w-full h-full object-cover"
                        />
                        
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${
                          isExpanded ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-lg font-bold mb-2 tracking-wider">
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

              {/* Mobile: 2 cards */}
              <div className="flex md:hidden items-center justify-center space-x-4 w-full">
                {getVisibleCards().map((character, index) => {
                  const isExpanded = expandedCard === ((currentIndex + index) % characters.length);
                  
                  return (
                    <div
                      key={`${character.id}-${currentIndex}-${index}`}
                      className={`relative transition-all duration-700 ease-in-out cursor-pointer ${
                        isExpanded ? 'w-48 h-64' : 'w-40 h-64'
                      }`}
                      onMouseEnter={() => {
                        setIsHovered(true);
                        setExpandedCard((currentIndex + index) % characters.length);
                      }}
                      onClick={() => handleCharacterClick(character.id)}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <img
                          src={character.image}
                          alt={character.name}
                          className="w-full h-full object-cover"
                        />
                        
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${
                          isExpanded ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h3 className="text-sm font-bold mb-1 tracking-wider">
                              {character.name}
                            </h3>
                            <p className="text-xs opacity-90 backdrop-blur-sm bg-black/20 p-1 rounded inline-block">
                              {character.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="text-white hover:text-[#85E912] transition-colors z-20 bg-black/30 rounded-full p-3 hover:bg-black/50 flex-shrink-0"
          >
            <ArrowRight className="w-8 h-8" />
          </button>
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
      </div>
    </section>
  );
};

export default HeroSection;

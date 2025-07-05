
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const storyContent = [
    {
      text: "Description of story behind demon slayer with left side image animations for better interactivity / indulging.",
      media: "/lovable-uploads/4254a7da-85ef-4708-9fc4-66d58522597f.png"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      media: "/lovable-uploads/b1fa2537-2501-497e-a5ce-65e2097d94dc.png"
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      media: "/lovable-uploads/4b061953-890d-4607-afb7-8a1b1f03f6ad.png"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentStoryIndex((prev) => (prev + 1) % storyContent.length);
      }, 4000 / scrollSpeed);
      return () => clearInterval(interval);
    }
  }, [isPaused, scrollSpeed, storyContent.length]);

  return (
    <section className="bg-[#FDF0D5]/80 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">ABOUT</h2>
          <p className="text-black/50 italic text-lg">'know the story behind all the chaos'</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Media Slider */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={storyContent[currentStoryIndex].media}
                alt="Story visual"
                className="w-full h-full object-cover transition-all duration-1000"
              />
            </div>
            
            {/* Media Controls */}
            <div className="flex justify-center mt-4 space-x-2">
              {storyContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStoryIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentStoryIndex === index ? 'bg-[#780000]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Auto Scrolling Text */}
          <div className="relative">
            <div 
              className="bg-[#780000] rounded-3xl p-8 min-h-[400px] overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="text-white space-y-6">
                <p className="text-lg leading-relaxed">
                  {storyContent[currentStoryIndex].text}
                </p>
                
                <div className="mt-8">
                  <p className="text-lg leading-relaxed opacity-90">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-lg leading-relaxed opacity-80">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>

            {/* Scroll Speed Control */}
            <div className="mt-6 flex items-center justify-center space-x-4">
              <span className="text-black text-sm">Speed:</span>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.5"
                value={scrollSpeed}
                onChange={(e) => setScrollSpeed(Number(e.target.value))}
                className="w-32"
              />
              <span className="text-black text-sm">{scrollSpeed}x</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

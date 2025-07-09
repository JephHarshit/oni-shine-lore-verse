
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Heart, Share2 } from 'lucide-react';

const Character = () => {
  const { id } = useParams();
  
  // Sample character data - in a real app, this would come from an API
  const characters = {
    '1': {
      name: "KAMADO",
      subtitle: "TANJIRO",
      description: "Tanjiro is the main protagonist of Demon Slayer. He is a kindhearted boy who sold charcoal for a living until his family was slaughtered by demons. He joined the Demon Slayer Corps to find a way to turn his sister Nezuko back into a human and to kill the demon that massacred his family.",
      additionalDescription: "Despite the tragedy that befell his family, Tanjiro maintains his compassionate nature and refuses to give up hope. His determination and empathy make him a formidable demon slayer."
    },
    '2': {
      name: "KAMADO",
      subtitle: "NEZUKO",
      description: "Nezuko is Tanjiro's younger sister who was turned into a demon by Muzan Kibutsuji. Despite being a demon, she has retained her humanity and fights alongside her brother. She is known for her fierce protective instincts and her ability to shrink her body size.",
      additionalDescription: "Nezuko's transformation is unique among demons as she has never consumed human flesh and retains her human emotions and memories."
    },
    '3': {
      name: "GIYU",
      subtitle: "TOMIOKA",
      description: "Giyu Tomioka is the Water Hashira of the Demon Slayer Corps. He is known for his calm and stoic demeanor, rarely showing emotion. He was the first person to show Tanjiro and Nezuko kindness when he spared their lives.",
      additionalDescription: "Giyu's quiet nature often makes him seem aloof, but he deeply cares about protecting humanity and his fellow demon slayers."
    },
    '4': {
      name: "INOSUKE",
      subtitle: "HASHIBIRA",
      description: "Inosuke is a demon slayer who created his own breathing technique called Beast Breathing. He was raised by boars in the mountains and is known for his wild fighting style and his boar mask that he wears on his head.",
      additionalDescription: "Despite his rough exterior and competitive nature, Inosuke is fiercely loyal to his friends and has a good heart beneath his wild demeanor."
    },
    '5': {
      name: "RENGOKU",
      subtitle: "KYOJURO",
      description: "Kyojuro Rengoku was the Flame Hashira of the Demon Slayer Corps. He was known for his enthusiastic and optimistic personality, as well as his incredible strength and mastery of Flame Breathing techniques.",
      additionalDescription: "Rengoku's unwavering determination and his philosophy of protecting the weak made him a beloved figure among the Demon Slayer Corps."
    },
    '6': {
      name: "SHINOBU",
      subtitle: "KOCHO",
      description: "Shinobu Kocho is the Insect Hashira of the Demon Slayer Corps. She is known for her gentle smile and her use of poison-based techniques to kill demons, as she lacks the physical strength to decapitate them.",
      additionalDescription: "Despite her delicate appearance, Shinobu is one of the most skilled demon slayers and has a deep hatred for demons due to her tragic past."
    }
  };

  const character = characters[id as keyof typeof characters] || characters['2']; // Default to Nezuko

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-white">
      <Navbar />
      
      <div className="pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-8">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              {/* Character Name - Floating Style */}
              <div className="relative">
                <div className="backdrop-blur-sm bg-white/20 rounded-3xl p-8 border border-white/30 shadow-lg">
                  <h1 className="text-6xl lg:text-8xl font-bold text-red-600 leading-none">
                    {character.name}
                  </h1>
                  <h2 className="text-4xl lg:text-6xl font-bold text-red-500 mt-2">
                    {character.subtitle}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30 shadow-lg">
                <p className="text-gray-800 leading-relaxed text-lg">
                  {character.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors">
                  <Heart className="w-5 h-5" />
                  Add to Favorites
                </button>
                <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full hover:bg-white/30 transition-colors border border-white/30">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>

            {/* Right Side - Character Images */}
            <div className="space-y-6">
              {/* Main Character Image Placeholder */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-pink-200 to-red-200 rounded-3xl border-4 border-white shadow-xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">📷</span>
                      </div>
                      <p className="text-lg font-medium">Character Image</p>
                      <p className="text-sm opacity-70">Upload image here</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Character Name on Image */}
                <div className="absolute top-6 left-6 backdrop-blur-sm bg-white/30 rounded-2xl px-4 py-2 border border-white/40">
                  <h3 className="text-xl font-bold text-red-600">{character.subtitle}</h3>
                </div>
              </div>

              {/* Secondary Image Placeholder */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-pink-200 rounded-2xl border-4 border-white shadow-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/50 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-xl">📷</span>
                      </div>
                      <p className="font-medium">Secondary Image</p>
                      <p className="text-sm opacity-70">Upload here</p>
                    </div>
                  </div>
                </div>

                {/* Additional Description */}
                <div className="mt-4 backdrop-blur-sm bg-white/20 rounded-xl p-4 border border-white/30">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {character.additionalDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;

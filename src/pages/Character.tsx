
import Navbar from '../components/Navbar';
import { Heart, Share2 } from 'lucide-react';

const Character = () => {
  // This will be populated with actual character data
  const character = {
    name: "KAMADO",
    subtitle: "NEZUKO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    additionalDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  };

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
                  <h3 className="text-xl font-bold text-red-600">NE ZU KO</h3>
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

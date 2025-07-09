
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ArrowRight } from 'lucide-react';

const Favorites = () => {
  const navigate = useNavigate();
  
  // Sample favorites data
  const favorites = [
    {
      id: 1,
      name: 'KAMADO TANJIRO',
      image: '/lovable-uploads/4254a7da-85ef-4708-9fc4-66d58522597f.png'
    },
    {
      id: 2,
      name: 'NEZUKO KAMADO',
      image: '/lovable-uploads/b1fa2537-2501-497e-a5ce-65e2097d94dc.png'
    },
    {
      id: 3,
      name: 'GIYU TOMIOKA',
      image: '/lovable-uploads/4b061953-890d-4607-afb7-8a1b1f03f6ad.png'
    },
    {
      id: 4,
      name: 'INOSUKE HASHIBIRA',
      image: '/lovable-uploads/db638674-c0e8-423a-94ed-8ca7cc479f57.png'
    }
  ];

  const handleViewCharacter = (characterId: number) => {
    navigate(`/character/${characterId}`);
  };

  return (
    <div className="min-h-screen bg-[#780000]">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Favorites Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Your Favorites</h1>
            <p className="text-white/80 text-lg">
              Characters you've added to your favorites list
            </p>
          </div>

          {/* Favorites Grid */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            {favorites.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {favorites.map((character) => (
                  <div 
                    key={character.id}
                    className="bg-white rounded-2xl p-6 flex items-center gap-6 hover:shadow-lg transition-shadow"
                  >
                    {/* Character Image */}
                    <div className="w-20 h-20 flex-shrink-0">
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Character Name */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black">
                        {character.name}
                      </h3>
                    </div>

                    {/* View Button */}
                    <button 
                      onClick={() => handleViewCharacter(character.id)}
                      className="bg-[#85E912] text-black px-6 py-3 rounded-full hover:bg-[#6BB00F] transition-colors flex items-center gap-2"
                    >
                      View
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-white mb-4">No favorites yet</h3>
                <p className="text-white/70">Start adding characters to your favorites to see them here!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;

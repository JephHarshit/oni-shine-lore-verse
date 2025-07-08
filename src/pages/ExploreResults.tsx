
import { useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const ExploreResults = () => {
  const location = useLocation();
  const { searchQuery, selectedFilters } = location.state || {};

  // Sample results data
  const results = [
    {
      id: 1,
      name: 'Rengoku Kyoujoro',
      image: '/lovable-uploads/4254a7da-85ef-4708-9fc4-66d58522597f.png'
    },
    {
      id: 2,
      name: 'GIYU TOMIOKA',
      image: '/lovable-uploads/4b061953-890d-4607-afb7-8a1b1f03f6ad.png'
    },
    {
      id: 3,
      name: 'GIYU TOMIOKA',
      image: '/lovable-uploads/4b061953-890d-4607-afb7-8a1b1f03f6ad.png'
    },
    {
      id: 4,
      name: 'Inosuke Hashibira',
      image: '/lovable-uploads/db638674-c0e8-423a-94ed-8ca7cc479f57.png'
    },
    {
      id: 5,
      name: 'Muichiro Tokito',
      image: '/lovable-uploads/4b061953-890d-4607-afb7-8a1b1f03f6ad.png'
    },
    {
      id: 6,
      name: 'KAMADO NEZUKO',
      image: '/lovable-uploads/b1fa2537-2501-497e-a5ce-65e2097d94dc.png'
    }
  ];

  return (
    <div className="min-h-screen bg-[#780000]">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Results Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Search Results</h1>
            {searchQuery && (
              <p className="text-white/80 text-lg">
                Results for: "{searchQuery}"
              </p>
            )}
          </div>

          {/* Results Grid */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((character) => (
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

                  {/* CTA Button */}
                  <button className="bg-[#85E912] text-black px-6 py-3 rounded-full hover:bg-[#6BB00F] transition-colors flex items-center gap-2">
                    View
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreResults;


import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExploreSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    gender: '',
    type: [],
    season: []
  });
  const navigate = useNavigate();

  const toggleFilter = (category: string, value: string) => {
    if (category === 'gender') {
      setSelectedFilters(prev => ({
        ...prev,
        gender: prev.gender === value ? '' : value
      }));
    } else if (category === 'type') {
      setSelectedFilters(prev => ({
        ...prev,
        type: prev.type.includes(value)
          ? prev.type.filter(item => item !== value)
          : value === 'Demon' && (prev.type.includes('Demon Slayer') || prev.type.includes('Hashira'))
          ? [value]
          : prev.type.includes('Demon') && (value === 'Demon Slayer' || value === 'Hashira')
          ? [value]
          : [...prev.type, value]
      }));
    } else if (category === 'season') {
      setSelectedFilters(prev => ({
        ...prev,
        season: prev.season.includes(value)
          ? prev.season.filter(item => item !== value)
          : [...prev.season, value]
      }));
    }
  };

  const handleSearch = () => {
    console.log("Searching with:", { searchQuery, selectedFilters });
    navigate('/explore-results', { 
      state: { searchQuery, selectedFilters } 
    });
  };

  return (
    <section id="explore" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">EXPLORE</h2>
          <p className="text-black/50 italic text-lg">'find demons and slayers'</p>
        </div>

        <div className="flex rounded-3xl overflow-hidden shadow-2xl bg-white min-h-[500px]">
          {/* Left Side - Image with Search */}
          <div className="w-[30%] relative">
            <img
              src="/lovable-uploads/bdde5c4c-253a-4897-b8f4-840af911cbc6.png"
              alt="Character"
              className="w-full h-full object-cover blur-sm"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Search Box Overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-6 text-center leading-tight">
                  SEARCH<br />VIA<br />NAME
                </h3>
                <input
                  type="text"
                  placeholder="search via name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#85E912] mb-4 text-black placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Filters */}
          <div className="w-[70%] bg-[#669BBC]/50 p-12 flex flex-col justify-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-8 text-center">Select a filter</h3>
              
              <div className="space-y-6">
                {/* Type Filters */}
                <div className="flex flex-wrap gap-4 justify-center">
                  {['Demon Slayer', 'Demon', 'Hashira'].map((type) => (
                    <button
                      key={type}
                      onClick={() => toggleFilter('type', type)}
                      className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                        selectedFilters.type.includes(type)
                          ? 'bg-[#669BBC] text-white'
                          : 'bg-[#669BBC] text-white hover:bg-[#85E912] hover:text-black'
                      }`}
                    >
                      {type} 
                      <span className="text-sm">
                        {selectedFilters.type.includes(type) ? '✓' : '✗'}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Gender Filters */}
                <div className="flex flex-wrap gap-4 justify-center">
                  {['Female', 'Male'].map((gender) => (
                    <button
                      key={gender}
                      onClick={() => toggleFilter('gender', gender)}
                      className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                        selectedFilters.gender === gender
                          ? 'bg-[#669BBC] text-white'
                          : 'bg-[#669BBC] text-white hover:bg-[#85E912] hover:text-black'
                      }`}
                    >
                      {gender} 
                      <span className="text-sm">
                        {selectedFilters.gender === gender ? '✓' : '✗'}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Season Filters */}
                <div className="flex flex-wrap gap-4 justify-center">
                  {['Season 1: kimetsu no yaiba'].map((season) => (
                    <button
                      key={season}
                      onClick={() => toggleFilter('season', season)}
                      className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                        selectedFilters.season.includes(season)
                          ? 'bg-[#669BBC] text-white'
                          : 'bg-[#669BBC] text-white hover:bg-[#85E912] hover:text-black'
                      }`}
                    >
                      {season} 
                      <span className="text-sm">
                        {selectedFilters.season.includes(season) ? '✓' : ''}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Button */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleSearch}
                  className="bg-[#85E912] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#6BB00F] transition-colors flex items-center gap-2"
                >
                  Search <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;

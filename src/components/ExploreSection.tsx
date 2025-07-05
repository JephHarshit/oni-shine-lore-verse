
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ExploreSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    gender: '',
    type: [],
    season: []
  });

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
          : prev.type.includes('Demon') && (value === 'Demon Slayer' || value === 'Hashira')
          ? [value]
          : value === 'Demon' && (prev.type.includes('Demon Slayer') || prev.type.includes('Hashira'))
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
    // Navigate to search results page
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">EXPLORE</h2>
          <p className="text-black/50 italic text-lg">'find demons and slayers'</p>
        </div>

        <div className="flex rounded-3xl overflow-hidden shadow-2xl bg-white min-h-[500px]">
          {/* Left Side - Image with Search */}
          <div className="w-1/5 relative">
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
                  placeholder="Enter character name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#85E912] mb-4"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Filters */}
          <div className="w-4/5 bg-[#669BBC]/50 p-12">
            <div className="max-w-4xl">
              <h3 className="text-2xl font-bold text-black mb-8">Select a filter</h3>
              
              {/* Type Filters */}
              <div className="flex flex-wrap gap-4 mb-6">
                {['Demon Slayer', 'Demon', 'Hashira'].map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleFilter('type', type)}
                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                      selectedFilters.type.includes(type)
                        ? 'bg-[#85E912] text-black'
                        : 'bg-[#669BBC] text-white hover:bg-[#85E912] hover:text-black'
                    }`}
                  >
                    {type} {selectedFilters.type.includes(type) ? '✓' : '✗'}
                  </button>
                ))}
              </div>

              {/* Gender Filters */}
              <div className="flex flex-wrap gap-4 mb-6">
                {['Female', 'Male'].map((gender) => (
                  <button
                    key={gender}
                    onClick={() => toggleFilter('gender', gender)}
                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                      selectedFilters.gender === gender
                        ? 'bg-[#85E912] text-black'
                        : 'bg-[#669BBC] text-white hover:bg-[#85E912] hover:text-black'
                    }`}
                  >
                    {gender} {selectedFilters.gender === gender ? '✓' : '✗'}
                  </button>
                ))}
              </div>

              {/* Season Filters */}
              <div className="flex flex-wrap gap-4 mb-8">
                {['Season 1: kimetsu no yaiba'].map((season) => (
                  <button
                    key={season}
                    onClick={() => toggleFilter('season', season)}
                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                      selectedFilters.season.includes(season)
                        ? 'bg-[#85E912] text-black'
                        : 'bg-[#669BBC] text-white hover:bg-[#85E912] hover:text-black'
                    }`}
                  >
                    {season} {selectedFilters.season.includes(season) ? '✓' : ''}
                  </button>
                ))}
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="bg-[#85E912] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#6BB00F] transition-colors flex items-center gap-2 ml-auto"
              >
                Search <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;

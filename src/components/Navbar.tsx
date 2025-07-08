
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, User } from 'lucide-react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="bg-black text-white px-6 py-4 mx-4 mt-4 rounded-[2rem] shadow-lg">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            Oni-Shine
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('explore')}
              className="hover:text-gray-300 transition-colors"
            >
              Explore
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-gray-300 transition-colors"
            >
              Story
            </button>
            {!isLoggedIn ? (
              <>
                <Link to="/signin" className="hover:text-gray-300 transition-colors">
                  SignIn
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-[#85E912] text-black px-4 py-2 rounded-full hover:bg-[#6BB00F] transition-colors"
                >
                  SignUp
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile" className="hover:text-gray-300 transition-colors">
                  Profile
                </Link>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="hover:text-gray-300 transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
            <Heart className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
            <User className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

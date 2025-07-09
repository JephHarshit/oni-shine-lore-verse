
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="bg-black text-white px-6 py-4 mx-4 mt-4 rounded-[2rem] shadow-lg">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <button onClick={handleLogoClick} className="text-xl font-bold hover:text-gray-300 transition-colors">
            Oni-Shine
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
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
            <button 
              onClick={() => scrollToSection('they-said')}
              className="hover:text-gray-300 transition-colors"
            >
              Quotes
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
            <Link to="/favorites">
              <Heart className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
            </Link>
            <Link to="/profile">
              <User className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('explore')}
                className="text-left hover:text-gray-300 transition-colors"
              >
                Explore
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-gray-300 transition-colors"
              >
                Story
              </button>
              <button 
                onClick={() => scrollToSection('they-said')}
                className="text-left hover:text-gray-300 transition-colors"
              >
                Quotes
              </button>
              {!isLoggedIn ? (
                <>
                  <Link 
                    to="/signin" 
                    className="text-left hover:text-gray-300 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    SignIn
                  </Link>
                  <Link 
                    to="/signup" 
                    className="bg-[#85E912] text-black px-4 py-2 rounded-full hover:bg-[#6BB00F] transition-colors text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    SignUp
                  </Link>
                </>
              ) : (
                <>
                  <Link 
                    to="/profile" 
                    className="text-left hover:text-gray-300 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button 
                    onClick={() => {
                      setIsLoggedIn(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left hover:text-gray-300 transition-colors"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

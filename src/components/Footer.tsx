
import { useState } from 'react';
import { Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    setEmailError('');
    console.log('Sending suggestion:', { email, message });
    // Here you would integrate with EmailJS
    setEmail('');
    setMessage('');
  };

  return (
    <footer className="bg-[#003049] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content - Single Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Vertical Site Name */}
          <div className="flex flex-col justify-center">
            <div className="text-4xl font-bold tracking-wider">
              <div>O</div>
              <div>n</div>
              <div>i</div>
              <div>-</div>
              <div>S</div>
              <div>h</div>
              <div>i</div>
              <div>n</div>
              <div>e</div>
            </div>
          </div>

          {/* Know More About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 opacity-100">Know More About Us</h3>
            <div className="space-y-2">
              <a href="#" className="block text-white/70 hover:text-white transition-colors">Our BlogSite</a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors">Team</a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors">Fill it random</a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors">Our Blog</a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors">Fill it random</a>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div>
            <h3 className="text-lg font-bold mb-4 opacity-100">Terms & Conditions</h3>
            <div className="space-y-2 text-white/70 text-sm">
              <a href="#" className="block hover:text-white transition-colors">Our BlogSite</a>
              <a href="#" className="block hover:text-white transition-colors">Team</a>
              <a href="#" className="block hover:text-white transition-colors">Fill it random</a>
              <a href="#" className="block hover:text-white transition-colors">Our Blog</a>
              <a href="#" className="block hover:text-white transition-colors">Fill it random</a>
              <a href="#" className="block hover:text-white transition-colors">Fill it random</a>
            </div>
          </div>

          {/* Suggestions Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 opacity-100">Suggestions</h3>
            <p className="text-white/70 text-sm mb-4">
              Your new suggestions are always welcome. Share your thought with us and the world!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Type your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#85E912]"
              />
              {emailError && (
                <p className="text-red-400 text-sm">{emailError}</p>
              )}
              
              <textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#85E912] resize-none"
              />
              
              <button
                type="submit"
                className="bg-[#85E912] text-black px-6 py-2 rounded-lg hover:bg-[#6BB00F] transition-colors flex items-center gap-2"
              >
                Send <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm">copyright © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-[#780000]">
      <Navbar />
      <div className="pt-20 min-h-screen flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Sign In</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-black font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#85E912]"
                required
              />
            </div>
            
            <div>
              <label className="block text-black font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#85E912]"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#85E912] text-black py-3 rounded-lg font-bold hover:bg-[#6BB00F] transition-colors"
            >
              Sign In
            </button>
          </form>
          
          <p className="text-center mt-6 text-black">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#780000] font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

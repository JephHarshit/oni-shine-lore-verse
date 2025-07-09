
import Navbar from '../components/Navbar';
import { User, Settings, Heart, BookOpen } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-[#85E912] rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="w-12 h-12 text-black" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Your Profile</h1>
            <p className="text-muted-foreground">Manage your account and preferences</p>
          </div>

          {/* Profile Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Heart className="w-8 h-8 text-red-500" />
                <h3 className="text-xl font-semibold">Favorites</h3>
              </div>
              <p className="text-muted-foreground mb-4">View and manage your favorite characters</p>
              <button className="bg-[#85E912] text-black px-4 py-2 rounded-lg hover:bg-[#6BB00F] transition-colors">
                View Favorites
              </button>
            </div>

            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-semibold">Reading History</h3>
              </div>
              <p className="text-muted-foreground mb-4">Track characters you've explored</p>
              <button className="bg-[#85E912] text-black px-4 py-2 rounded-lg hover:bg-[#6BB00F] transition-colors">
                View History
              </button>
            </div>

            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Settings className="w-8 h-8 text-gray-600" />
                <h3 className="text-xl font-semibold">Settings</h3>
              </div>
              <p className="text-muted-foreground mb-4">Customize your experience</p>
              <button className="bg-[#85E912] text-black px-4 py-2 rounded-lg hover:bg-[#6BB00F] transition-colors">
                Manage Settings
              </button>
            </div>

            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <User className="w-8 h-8 text-purple-500" />
                <h3 className="text-xl font-semibold">Account Info</h3>
              </div>
              <p className="text-muted-foreground mb-4">Update your personal information</p>
              <button className="bg-[#85E912] text-black px-4 py-2 rounded-lg hover:bg-[#6BB00F] transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

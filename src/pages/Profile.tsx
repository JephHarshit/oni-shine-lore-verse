
import Navbar from '../components/Navbar';
import { User, LogOut, Trash2 } from 'lucide-react';

const Profile = () => {
  // Sample user data
  const user = {
    username: "DemonSlayerFan",
    email: "user@example.com"
  };

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
    }
  ];

  const handleLogout = () => {
    // Logout logic here
    console.log("User logged out");
  };

  const handleDeleteAccount = () => {
    // Delete account logic here
    console.log("Account deletion requested");
  };

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
            <h1 className="text-4xl font-bold mb-2">Profile</h1>
            <p className="text-muted-foreground">Manage your account</p>
          </div>

          <div className="space-y-8">
            {/* User Information */}
            <div className="bg-card border rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">Username</label>
                  <p className="text-lg">{user.username}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                  <p className="text-lg">{user.email}</p>
                </div>
              </div>
            </div>

            {/* Favorites List */}
            <div className="bg-card border rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Your Favorites ({favorites.length})</h2>
              {favorites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {favorites.map((character) => (
                    <div key={character.id} className="flex items-center gap-3 p-3 bg-background rounded-lg border">
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <span className="font-medium">{character.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No favorites added yet.</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
              <button
                onClick={handleDeleteAccount}
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

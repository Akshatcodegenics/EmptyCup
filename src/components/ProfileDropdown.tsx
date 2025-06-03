
import React from 'react';
import { User, Settings, LogOut, Crown, Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';

interface ProfileDropdownProps {
  onClose: () => void;
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onClose }) => {
  const { toast } = useToast();
  
  const userData = {
    name: "John Designer",
    email: "john@designpro.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    role: "Pro Designer",
    rating: 4.9,
    projects: 42
  };

  const handleViewProfile = () => {
    console.log('View Profile clicked for user:', userData.name);
    toast({
      title: "Profile Viewer",
      description: `Opening ${userData.name}'s detailed profile with portfolio showcase`,
    });
    onClose();
  };

  const handleSettings = () => {
    console.log('Settings clicked');
    toast({
      title: "Settings Panel",
      description: "Accessing account preferences, notifications, and privacy settings",
    });
    onClose();
  };

  const handleSignOut = () => {
    console.log('Sign out initiated');
    toast({
      title: "Signing Out",
      description: "You have been successfully logged out. See you soon!",
    });
    // Simulate sign out delay
    setTimeout(() => {
      console.log('User signed out successfully');
    }, 1000);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose}></div>
      <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-scale-in">
        <div className="p-6">
          {/* Profile Header */}
          <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
            <div className="relative">
              <Avatar className="w-16 h-16 ring-2 ring-blue-100 hover:ring-blue-300 transition-all duration-300">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
                  {userData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                <Crown className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-lg">{userData.name}</h3>
              <p className="text-blue-600 font-medium">{userData.role}</p>
              <p className="text-gray-500 text-sm">{userData.email}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="py-4 border-b border-gray-100">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg hover:scale-105 transition-transform duration-200">
                <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-gray-800">{userData.rating}</span>
                </div>
                <p className="text-xs text-gray-600">Rating</p>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg hover:scale-105 transition-transform duration-200">
                <div className="font-bold text-gray-800 mb-1">{userData.projects}</div>
                <p className="text-xs text-gray-600">Projects</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <button 
              onClick={handleViewProfile}
              className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group"
            >
              <User className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>View Profile</span>
            </button>
            <button 
              onClick={handleSettings}
              className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group"
            >
              <Settings className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
              <span>Settings</span>
            </button>
            <button 
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
            >
              <LogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

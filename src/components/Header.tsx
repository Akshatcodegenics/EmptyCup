import React, { useState } from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { ProfileDropdown } from './ProfileDropdown';
import { NotificationPanel } from './NotificationPanel';
export const Header = () => {
  const location = useLocation();
  const {
    toast
  } = useToast();
  const [hasNotifications, setHasNotifications] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const isActive = (path: string) => location.pathname === path;
  const handleNotificationClick = () => {
    console.log('Notification clicked');
    setShowNotifications(!showNotifications);
    setHasNotifications(false);
  };
  const handleProfileClick = () => {
    console.log('Profile clicked');
    setShowProfile(!showProfile);
  };
  return <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">EmptyCup</Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className={`font-medium transition-all duration-300 relative group ${isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
                Browse
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${isActive('/') ? 'w-full' : ''}`}></span>
              </Link>
              <Link to="/projects" className={`font-medium transition-all duration-300 relative group ${isActive('/projects') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
                Projects
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${isActive('/projects') ? 'w-full' : ''}`}></span>
              </Link>
              <Link to="/talent" className={`font-medium transition-all duration-300 relative group ${isActive('/talent') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
                Talent
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${isActive('/talent') ? 'w-full' : ''}`}></span>
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 transition-colors duration-200 group-focus-within:text-blue-500" />
              <input type="text" placeholder="Search designers..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 transition-all duration-300 hover:shadow-md focus:shadow-lg" />
            </div>
            
            <div className="relative">
              <button onClick={handleNotificationClick} className="relative p-2 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:bg-blue-50 rounded-lg hover:scale-110 group">
                <Bell className={`w-5 h-5 transition-transform duration-200 ${showNotifications ? 'animate-bounce' : ''}`} />
                {hasNotifications && <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>}
                <div className="absolute inset-0 bg-blue-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
              </button>
              {showNotifications && <NotificationPanel onClose={() => setShowNotifications(false)} />}
            </div>
            
            <div className="relative">
              <button onClick={handleProfileClick} className="relative p-2 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:bg-blue-50 rounded-lg hover:scale-110 group">
                <User className={`w-5 h-5 transition-transform duration-200 ${showProfile ? 'rotate-12' : ''}`} />
                <div className="absolute inset-0 bg-blue-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
              </button>
              {showProfile && <ProfileDropdown onClose={() => setShowProfile(false)} />}
            </div>
          </div>
        </div>
      </div>
    </header>;
};
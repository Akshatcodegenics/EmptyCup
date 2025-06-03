
import React from 'react';
import { Bell, MessageCircle, Star, Briefcase, X, Check } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface NotificationPanelProps {
  onClose: () => void;
}

export const NotificationPanel: React.FC<NotificationPanelProps> = ({ onClose }) => {
  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'New Message',
      description: 'Sarah Chen sent you a message about the mobile app project',
      time: '2 minutes ago',
      unread: true,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      icon: MessageCircle
    },
    {
      id: 2,
      type: 'review',
      title: 'Project Review',
      description: 'Your design for "E-commerce Dashboard" received a 5-star rating',
      time: '1 hour ago',
      unread: true,
      avatar: null,
      icon: Star
    },
    {
      id: 3,
      type: 'project',
      title: 'New Project Invitation',
      description: 'TechCorp invited you to work on their brand redesign project',
      time: '3 hours ago',
      unread: false,
      avatar: null,
      icon: Briefcase
    },
    {
      id: 4,
      type: 'message',
      title: 'Team Update',
      description: 'Marcus Chen shared the latest design system updates',
      time: '1 day ago',
      unread: false,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      icon: MessageCircle
    }
  ];

  const getNotificationIcon = (type: string, IconComponent: any) => {
    const iconColors = {
      message: 'text-blue-500 bg-blue-100',
      review: 'text-yellow-500 bg-yellow-100',
      project: 'text-green-500 bg-green-100'
    };

    return (
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${iconColors[type as keyof typeof iconColors]} animate-pulse`}>
        <IconComponent className="w-4 h-4" />
      </div>
    );
  };

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose}></div>
      <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-slide-up max-h-96 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-blue-600 animate-bounce" />
              <h3 className="font-semibold text-gray-800">Notifications</h3>
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                {notifications.filter(n => n.unread).length}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200 hover:rotate-90"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="max-h-80 overflow-y-auto">
          {notifications.map((notification, index) => (
            <div 
              key={notification.id}
              className={`p-4 border-b border-gray-50 hover:bg-blue-25 transition-all duration-200 cursor-pointer group animate-fade-in ${
                notification.unread ? 'bg-blue-25' : 'hover:bg-gray-25'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                {notification.avatar ? (
                  <Avatar className="w-10 h-10 ring-2 ring-blue-100 group-hover:ring-blue-200 transition-all duration-200">
                    <AvatarImage src={notification.avatar} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                ) : (
                  getNotificationIcon(notification.type, notification.icon)
                )}
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className={`font-medium ${notification.unread ? 'text-gray-900' : 'text-gray-700'} group-hover:text-blue-600 transition-colors duration-200`}>
                      {notification.title}
                    </h4>
                    {notification.unread && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {notification.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 bg-gray-50 border-t border-gray-100">
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 group">
              <Check className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm">Mark All Read</span>
            </button>
            <button className="flex-1 py-2 px-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-105">
              <span className="text-sm">View All</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


import React, { useState } from 'react';
import { Heart, Eye, EyeOff, Flag, ExternalLink, MapPin, Star } from 'lucide-react';

interface Designer {
  id: number;
  name: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  image: string;
  tags: string[];
  portfolio: string[];
  isOnline: boolean;
}

interface DesignerCardProps {
  designer: Designer;
  isShortlisted: boolean;
  onToggleShortlist: () => void;
}

export const DesignerCard = ({ designer, isShortlisted, onToggleShortlist }: DesignerCardProps) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleDetails = () => {
    console.log('View details for:', designer.name);
    // This would typically navigate to a detailed designer page
    alert(`Designer Details:\n\nName: ${designer.name}\nTitle: ${designer.title}\nLocation: ${designer.location}\nRating: ${designer.rating}/5 (${designer.reviews} reviews)\nHourly Rate: $${designer.hourlyRate}/hour\n\nSkills: ${designer.tags.join(', ')}\n\nStatus: ${designer.isOnline ? 'Online' : 'Offline'}`);
  };

  const handleHide = () => {
    setIsHidden(!isHidden);
  };

  const handleReport = () => {
    console.log('Report:', designer.name);
    alert(`Report submitted for ${designer.name}. Thank you for your feedback.`);
  };

  if (isHidden) {
    return (
      <div className="bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-200">
        <div className="text-center text-gray-500">
          <EyeOff className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p className="text-sm">Designer hidden</p>
          <button
            onClick={handleHide}
            className="text-blue-600 hover:text-blue-700 text-sm mt-2 underline"
          >
            Show again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Header with avatar and online status */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={designer.image}
                alt={designer.name}
                className="w-12 h-12 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face';
                }}
              />
              {designer.isOnline && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{designer.name}</h3>
              <p className="text-sm text-gray-600">{designer.title}</p>
            </div>
          </div>
          
          <button
            onClick={onToggleShortlist}
            className={`p-2 rounded-lg transition-all duration-200 ${
              isShortlisted
                ? 'text-red-500 bg-red-50 hover:bg-red-100'
                : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
            }`}
          >
            <Heart className={`w-5 h-5 ${isShortlisted ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Location and rating */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{designer.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{designer.rating}</span>
            <span>({designer.reviews})</span>
          </div>
        </div>

        {/* Portfolio preview */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {designer.portfolio.slice(0, 3).map((image, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop&crop=center';
                }}
              />
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {designer.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Rate */}
        <div className="text-center mb-4">
          <span className="text-2xl font-bold text-gray-900">${designer.hourlyRate}</span>
          <span className="text-gray-600">/hour</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={handleDetails}
            className="flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="hidden sm:inline">Details</span>
          </button>
          
          <button
            onClick={handleHide}
            className="flex items-center justify-center gap-1 px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            <EyeOff className="w-4 h-4" />
            <span className="hidden sm:inline">Hide</span>
          </button>
          
          <button
            onClick={onToggleShortlist}
            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
              isShortlisted
                ? 'bg-red-50 text-red-600 hover:bg-red-100'
                : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600'
            }`}
          >
            <Heart className={`w-4 h-4 ${isShortlisted ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">List</span>
          </button>
          
          <button
            onClick={handleReport}
            className="flex items-center justify-center gap-1 px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm font-medium"
          >
            <Flag className="w-4 h-4" />
            <span className="hidden sm:inline">Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};

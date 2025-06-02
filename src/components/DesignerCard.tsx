import React from 'react';
import { Star, MapPin, Briefcase, Heart, Eye, EyeOff, Flag, Undo } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DesignerCardProps {
  designer: {
    id: number;
    name: string;
    specialty: string;
    experience: string;
    location: string;
    rating: number;
    projects: number;
    image: string;
    skills: string[];
  };
  isShortlisted: boolean;
  onToggleShortlist: () => void;
}

export const DesignerCard: React.FC<DesignerCardProps> = ({
  designer,
  isShortlisted,
  onToggleShortlist
}) => {
  const { toast } = useToast();
  const [isHidden, setIsHidden] = React.useState(false);

  const handleDetails = () => {
    console.log('Viewing details for:', designer.name);
    toast({
      title: `${designer.name} - Designer Details`,
      description: `${designer.specialty} | ${designer.experience} experience | ${designer.location} | ${designer.projects} projects | ${designer.rating}/5 rating`,
    });
  };

  const handleHide = () => {
    setIsHidden(true);
    toast({
      title: "Designer Hidden",
      description: `${designer.name} has been hidden from your list.`,
    });
  };

  const handleUndo = () => {
    setIsHidden(false);
    toast({
      title: "Designer Restored",
      description: `${designer.name} has been restored to your list.`,
    });
  };

  const handleReport = () => {
    console.log('Reporting:', designer.name);
    toast({
      title: "Report Submitted",
      description: `Your report for ${designer.name} has been submitted for review.`,
      variant: "destructive",
    });
  };

  const handleShortlist = () => {
    onToggleShortlist();
    toast({
      title: isShortlisted ? "Removed from Shortlist" : "Added to Shortlist",
      description: `${designer.name} has been ${isShortlisted ? 'removed from' : 'added to'} your shortlist.`,
    });
  };

  if (isHidden) {
    return (
      <div className="bg-gray-100 rounded-xl p-6 border border-gray-200 opacity-60">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Designer hidden</p>
          <button
            onClick={handleUndo}
            className="flex items-center gap-2 mx-auto text-blue-600 hover:text-blue-700 font-medium"
          >
            <Undo className="w-4 h-4" />
            Undo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="relative">
        <img
          src={designer.image}
          alt={designer.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=250&fit=crop&crop=face';
          }}
        />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
            Top Rated
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
          {designer.name}
        </h3>
        <p className="text-blue-600 font-medium mb-4">{designer.specialty}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            <span>{designer.experience}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{designer.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{designer.rating}</span>
          </div>
          <span>{designer.projects} projects</span>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {designer.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
            {designer.skills.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                +{designer.skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleDetails}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Eye className="w-4 h-4" />
            Details
          </button>
          
          <button
            onClick={handleHide}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <EyeOff className="w-4 h-4" />
            Hide
          </button>
          
          <button
            onClick={handleShortlist}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
              isShortlisted
                ? 'bg-red-100 text-red-700 hover:bg-red-200'
                : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
            }`}
          >
            <Heart className={`w-4 h-4 ${isShortlisted ? 'fill-current' : ''}`} />
            {isShortlisted ? 'Shortlisted' : 'Shortlist'}
          </button>
          
          <button
            onClick={handleReport}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors duration-200"
          >
            <Flag className="w-4 h-4" />
            Report
          </button>
        </div>
      </div>
    </div>
  );
};

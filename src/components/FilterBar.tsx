
import React from 'react';
import { Filter, Heart } from 'lucide-react';

interface FilterBarProps {
  showShortlisted: boolean;
  setShowShortlisted: (show: boolean) => void;
  shortlistedCount: number;
}

export const FilterBar = ({ showShortlisted, setShowShortlisted, shortlistedCount }: FilterBarProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Designer</h1>
        <p className="text-gray-600">Discover talented designers for your next project</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </div>
        
        <button
          onClick={() => setShowShortlisted(!showShortlisted)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            showShortlisted
              ? 'bg-red-50 text-red-600 border border-red-200'
              : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
          }`}
        >
          <Heart className={`w-4 h-4 ${showShortlisted ? 'fill-current' : ''}`} />
          <span>Shortlisted</span>
          {shortlistedCount > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {shortlistedCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

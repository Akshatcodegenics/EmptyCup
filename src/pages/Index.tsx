
import React, { useState, useEffect } from 'react';
import { DesignerCard } from '../components/DesignerCard';
import { FilterBar } from '../components/FilterBar';
import { Header } from '../components/Header';
import { designersData } from '../data/designers';

const Index = () => {
  const [designers, setDesigners] = useState(designersData);
  const [showShortlisted, setShowShortlisted] = useState(false);
  const [shortlistedIds, setShortlistedIds] = useState<Set<number>>(new Set());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleShortlist = (id: number) => {
    const newShortlisted = new Set(shortlistedIds);
    if (newShortlisted.has(id)) {
      newShortlisted.delete(id);
    } else {
      newShortlisted.add(id);
    }
    setShortlistedIds(newShortlisted);
  };

  const filteredDesigners = showShortlisted 
    ? designers.filter(designer => shortlistedIds.has(designer.id))
    : designers;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <FilterBar 
            showShortlisted={showShortlisted}
            setShowShortlisted={setShowShortlisted}
            shortlistedCount={shortlistedIds.size}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredDesigners.map((designer, index) => (
            <div
              key={designer.id}
              className={`transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <DesignerCard
                designer={designer}
                isShortlisted={shortlistedIds.has(designer.id)}
                onToggleShortlist={() => toggleShortlist(designer.id)}
              />
            </div>
          ))}
        </div>
        
        {filteredDesigners.length === 0 && showShortlisted && (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-gray-400 text-lg">No shortlisted designers yet</div>
            <div className="text-gray-500 text-sm mt-2">Start shortlisting designers to see them here</div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;

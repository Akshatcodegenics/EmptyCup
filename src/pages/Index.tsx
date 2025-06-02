
import React, { useState, useEffect } from 'react';
import { DesignerCard } from '../components/DesignerCard';
import { FilterBar } from '../components/FilterBar';
import { Header } from '../components/Header';
import { designersData } from '../data/designers';

const Index = () => {
  const [designers, setDesigners] = useState(designersData);
  const [showShortlisted, setShowShortlisted] = useState(false);
  const [shortlistedIds, setShortlistedIds] = useState<Set<number>>(new Set());

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <FilterBar 
          showShortlisted={showShortlisted}
          setShowShortlisted={setShowShortlisted}
          shortlistedCount={shortlistedIds.size}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredDesigners.map((designer) => (
            <DesignerCard
              key={designer.id}
              designer={designer}
              isShortlisted={shortlistedIds.has(designer.id)}
              onToggleShortlist={() => toggleShortlist(designer.id)}
            />
          ))}
        </div>
        
        {filteredDesigners.length === 0 && showShortlisted && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-lg">No shortlisted designers yet</div>
            <div className="text-gray-500 text-sm mt-2">Start shortlisting designers to see them here</div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;

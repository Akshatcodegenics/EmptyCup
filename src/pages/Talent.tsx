
import React from 'react';
import { Header } from '../components/Header';
import { Award, Briefcase, MapPin, Star, TrendingUp } from 'lucide-react';

const Talent = () => {
  const talents = [
    {
      id: 1,
      name: "Emily Rodriguez",
      specialty: "UX Research & Strategy",
      experience: "8+ years",
      location: "San Francisco, CA",
      rating: 4.9,
      projects: 127,
      skills: ["User Research", "Design Strategy", "Prototyping"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Marcus Chen",
      specialty: "Visual Design & Branding",
      experience: "6+ years",
      location: "New York, NY",
      rating: 4.8,
      projects: 89,
      skills: ["Brand Identity", "Visual Design", "Illustration"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Sofia Andersson",
      specialty: "Product Design",
      experience: "5+ years",
      location: "Stockholm, Sweden",
      rating: 4.9,
      projects: 64,
      skills: ["Product Design", "Design Systems", "Frontend"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Top Talent</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with our most skilled and experienced designers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talents.map((talent, index) => (
            <div 
              key={talent.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={talent.image}
                      alt={talent.name}
                      className="w-16 h-16 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {talent.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{talent.specialty}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase className="w-4 h-4" />
                      <span>{talent.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{talent.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{talent.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>{talent.projects} projects completed</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 hover:shadow-lg">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Talent;

import React from 'react';
import { Header } from '../components/Header';
import { Folder, Clock, Users, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Redesign",
      description: "Complete redesign of an online store with modern UI/UX",
      status: "In Progress",
      timeline: "4 weeks",
      team: 3,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Mobile App Interface",
      description: "Design system for a fintech mobile application",
      status: "Completed",
      timeline: "6 weeks",
      team: 2,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Brand Identity",
      description: "Complete brand identity package for a tech startup",
      status: "Planning",
      timeline: "3 weeks",
      team: 4,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=200&fit=crop&crop=center"
    }
  ];

  const handleViewDetails = (project: typeof projects[0]) => {
    console.log('Viewing details for project:', project.title);
    // This would typically navigate to a detailed project page
    alert(`Project Details:\n\nTitle: ${project.title}\nStatus: ${project.status}\nTimeline: ${project.timeline}\nTeam: ${project.team} members\nRating: ${project.rating}/5\n\nDescription: ${project.description}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful design projects and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop&crop=center';
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800'
                      : project.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{project.timeline}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{project.team} members</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{project.rating}</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleViewDetails(project)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 hover:shadow-lg"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;

import { useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { Github, ExternalLink, Code, Star, Layers, Zap } from 'lucide-react';

function Projects() {
  // Gunakan Context (HAPUS state lokal isDark)
  const { isDark, bgClass, cardBg, textColor, textMuted, neumorph, neumorphInset } = useDarkMode();
  
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment gateway integration, inventory management, and admin dashboard.',
      category: 'Web App',
      techStack: ['React', 'Laravel', 'MySQL', 'Tailwind'],
      image: '🛍️',
      gradient: 'from-blue-500 to-cyan-500',
      stars: 42,
      status: 'Production'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, team chat, and progress tracking features.',
      category: 'Web App',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: '📋',
      gradient: 'from-purple-500 to-pink-500',
      stars: 38,
      status: 'Production'
    },
    {
      id: 3,
      title: 'Mobile Fitness Tracker',
      description: 'Android app for tracking workouts, calories, and health metrics with beautiful UI and offline support.',
      category: 'Mobile',
      techStack: ['Kotlin', 'Android Studio', 'Room DB', 'Material Design'],
      image: '💪',
      gradient: 'from-green-500 to-emerald-500',
      stars: 56,
      status: 'Beta'
    },
    {
      id: 4,
      title: '3D Game Portfolio',
      description: 'Interactive 3D puzzle game built with Unity featuring stunning graphics and engaging gameplay mechanics.',
      category: 'Game',
      techStack: ['Unity', 'C#', 'Blender', '3D Modeling'],
      image: '🎮',
      gradient: 'from-orange-500 to-red-500',
      stars: 67,
      status: 'Production'
    },
    {
      id: 5,
      title: 'AI Chatbot Assistant',
      description: 'Smart chatbot using NLP for customer support with sentiment analysis and multi-language support.',
      category: 'AI/ML',
      techStack: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      image: '🤖',
      gradient: 'from-indigo-500 to-purple-500',
      stars: 91,
      status: 'Development'
    },
    {
      id: 6,
      title: 'Restaurant Management',
      description: 'Complete restaurant POS system with table reservations, kitchen display, and inventory tracking.',
      category: 'Web App',
      techStack: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap'],
      image: '🍽️',
      gradient: 'from-yellow-500 to-orange-500',
      stars: 45,
      status: 'Production'
    }
  ];

  const filters = ['All', 'Web App', 'Mobile', 'Game', 'AI/ML'];
  
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <div className={`min-h-screen ${bgClass} py-24 relative overflow-hidden transition-all duration-500`}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      {/* DARK MODE TOGGLE DIHAPUS DARI SINI */}

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 ${cardBg} ${neumorph} rounded-full px-6 py-3 mb-6`}>
            <Layers className="w-5 h-5 text-orange-500" />
            <span className={`text-sm font-medium ${textColor}`}>My Work</span>
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-extrabold ${textColor} mb-6`}>
            Featured{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className={`text-xl ${textMuted} max-w-2xl mx-auto`}>
            Explore my latest work and creative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`${cardBg} ${selectedFilter === filter ? neumorphInset : neumorph} px-8 py-4 rounded-full ${textColor} font-semibold transition-all duration-300 hover:scale-105 ${
                selectedFilter === filter ? 'text-orange-500' : ''
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`${cardBg} ${neumorph} rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105 cursor-pointer`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Project Image/Icon */}
              <div className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="text-8xl transform transition-transform duration-500 hover:scale-110">
                  {project.image}
                </div>
                
                {/* Overlay on Hover */}
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                    <Github className="w-6 h-6 text-white" />
                  </button>
                  <button className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-gray-900">
                  {project.status}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Title & Stars */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-xl font-bold ${textColor} flex-1`}>
                    {project.title}
                  </h3>
                  <div className={`flex items-center gap-1 ${cardBg} ${neumorphInset} rounded-full px-3 py-1`}>
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className={`text-sm font-semibold ${textColor}`}>{project.stars}</span>
                  </div>
                </div>

                {/* Description */}
                <p className={`${textMuted} text-sm mb-4 line-clamp-3`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className={`${cardBg} ${neumorphInset} rounded-full px-3 py-1 text-xs font-semibold ${textColor}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className={`flex-1 ${cardBg} ${neumorph} rounded-xl py-3 ${textColor} font-semibold text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}>
                    <Code className="w-4 h-4" />
                    View Code
                  </button>
                  <button className={`flex-1 ${cardBg} ${neumorph} rounded-xl py-3 ${textColor} font-semibold text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}>
                    <Zap className="w-4 h-4" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className={`${cardBg} ${neumorph} px-12 py-5 rounded-2xl ${textColor} font-bold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-3`}>
            <span>Load More Projects</span>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {[
            { icon: '🚀', value: '15+', label: 'Projects Completed' },
            { icon: '⭐', value: '340+', label: 'GitHub Stars' },
            { icon: '👥', value: '8+', label: 'Happy Clients' },
            { icon: '🏆', value: '5+', label: 'Awards Won' }
          ].map((stat, i) => (
            <div
              key={i}
              className={`${cardBg} ${neumorph} rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300`}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className={`text-3xl font-bold ${textColor} mb-2`}>{stat.value}</div>
              <div className={`text-sm ${textMuted}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
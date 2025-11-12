import { useState, useRef } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  IoLayersOutline,
  IoLogoGithub,
  IoOpenOutline,
  IoCodeSlashOutline,
  IoFlashOutline,
  IoStarOutline,
  IoGlobeOutline,
  IoBrushOutline,
  IoGameControllerOutline,
  IoRocketOutline,
  IoPeopleOutline,
  IoCloseOutline,
  IoAlertCircleOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoMedicalOutline,
  IoListOutline
} from 'react-icons/io5';
import { SiFigma } from 'react-icons/si';
import SumateraUtaraImg from '../assets/photo/project/SumateraUtaraProject.png';
import PTSumberCahayaImg from '../assets/photo/project/PTSumberCahayaTimurProject.png';
import HarbourMindImg from '../assets/photo/project/HarbourMindProject.png';
import TheLazyJannahImg from '../assets/photo/project/TheLazyJannahProject.png';
import AplikasiRSRJProjectImg from '../assets/photo/project/AplikasiRSRJProject.png';
import TodolistProjectImg from '../assets/photo/project/TodolistProject.png';

function Projects() {
  const { cardBg, textColor, textMuted, neumorph, neumorphInset } = useDarkMode();
  
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const carouselRef = useRef(null);

  // Animation hooks
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [filtersRef, filtersVisible] = useScrollAnimation(0.1);
  const [projectsRef, projectsVisible] = useScrollAnimation(0.1);
  const [statsRef, statsVisible] = useScrollAnimation(0.2);

  const projects = [
    {
      id: 1,
      title: 'Website Pengenalan Budaya Sumatera Utara',
      description: 'Website informatif yang menampilkan kekayaan budaya Sumatera Utara dengan desain modern dan interaktif menggunakan React JS.',
      category: 'Web App',
      techStack: ['React JS', 'CSS', 'JavaScript'],
      icon: IoGlobeOutline,
      image: SumateraUtaraImg,
      gradient: 'from-blue-500 to-cyan-500',
      stars: 0,
      status: 'Production',
      githubLink: '',
      demoLink: '',
      isFigma: false
    },
    {
      id: 2,
      title: 'PT. Sumber Cahaya Timur - Company Profile',
      description: 'Website company profile modern dengan desain responsive dan animasi smooth menggunakan React Vite dan Tailwind CSS.',
      category: 'Web App',
      techStack: ['React Vite', 'Tailwind CSS', 'JavaScript'],
      icon: IoGlobeOutline,
      image: PTSumberCahayaImg,
      gradient: 'from-purple-500 to-pink-500',
      stars: 0,
      status: 'Production',
      githubLink: 'https://github.com/JazeL2304/sct-company-profile',
      demoLink: 'https://sctv1.vercel.app/',
      isFigma: false
    },
    {
      id: 3,
      title: 'Todolist Website',
      description: 'Website todo list modern dengan fitur CRUD lengkap, filter tasks, dan storage untuk menyimpan data. Dibangun dengan Php dan styled menggunakan CSS basic.',
      category: 'Web App',
      techStack: ['Php', 'MySQL'],
      icon: IoListOutline,
      image: TodolistProjectImg,
      gradient: 'from-indigo-500 to-purple-500',
      stars: 0,
      status: 'Production',
      githubLink: 'https://github.com/JazeL2304/TODOLIST_PROJECT',
      demoLink: '',
      isFigma: false
    },
    {
      id: 4,
      title: 'HarbourMind - Prototype Aplikasi',
      description: 'Prototype aplikasi mobile untuk manajemen kesehatan mental dengan UI/UX yang user-friendly dan modern, dibuat menggunakan Figma.',
      category: 'Design',
      techStack: ['Figma', 'UI/UX Design', 'Prototyping'],
      icon: IoBrushOutline,
      image: HarbourMindImg,
      gradient: 'from-green-500 to-emerald-500',
      stars: 0,
      status: 'Prototype',
      figmaLink: 'https://www.figma.com/design/UgzaPg9hD6fEnlUj8VcX4G/Mockup-aplikasi-kesehatan-mental--HarbourMind-?node-id=0-1&t=x3kAft9AbiLnmJaO-1',
      demoLink: 'https://www.figma.com/proto/UgzaPg9hD6fEnlUj8VcX4G/Mockup-aplikasi-kesehatan-mental--HarbourMind-?node-id=27-6866&t=LdzlayKvKEIlHaUz-1&starting-point-node-id=27%3A6853',
      isFigma: true
    },
    {
      id: 5,
      title: 'The Lazy Jannah - Game',
      description: 'Game interaktif yang dikembangkan menggunakan Unity dan C# dengan gameplay menarik dan grafis yang memukau.',
      category: 'Game',
      techStack: ['Unity', 'C#', 'Game Development'],
      icon: IoGameControllerOutline,
      image: TheLazyJannahImg,
      gradient: 'from-orange-500 to-red-500',
      stars: 0,
      status: 'Production',
      githubLink: 'https://github.com/JazeL2304/TheLazyJannah',
      demoLink: '',
      isFigma: false
    },
    {
      id: 6,
      title: 'Aplikasi Rumah Sakit Rawat Jalan',
      description: 'Aplikasi mobile untuk manajemen rawat jalan rumah sakit dengan fitur pendaftaran pasien, jadwal dokter, dan riwayat medis menggunakan Kotlin dan Android Studio.',
      category: 'Mobile App',
      techStack: ['Kotlin', 'Android Studio', 'Firebase'],
      icon: IoMedicalOutline,
      image: AplikasiRSRJProjectImg,
      gradient: 'from-teal-500 to-cyan-500',
      stars: 0,
      status: 'Development',
      githubLink: 'https://github.com/JazeL2304/PROJECT_ANTRIAN_RSRJ_KELOMPOK_2',
      demoLink: '',
      isFigma: false
    }
  ];

  const filters = ['All', 'Web App', 'Mobile App', 'Design', 'Game'];
  
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  const handleLinkClick = (link, type) => {
    if (!link || link.trim() === '') {
      setModalMessage(`Untuk sementara bagian ${type} belum tersedia`);
      setShowModal(true);
    } else {
      window.open(link, '_blank');
    }
  };

  const [isScrolling, setIsScrolling] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current && !isScrolling) {
      setIsScrolling(true);
      setSwipeDirection(direction);
      
      const container = carouselRef.current;
      const containerWidth = container.offsetWidth;
      const scrollAmount = containerWidth + 32;
      
      const targetScroll = direction === 'left' 
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });

      setTimeout(() => {
        setIsScrolling(false);
        setSwipeDirection(null);
      }, 600);
    }
  };

  const Modal = ({ show, onClose, message }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <div className={`relative ${cardBg} ${neumorph} rounded-3xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-100`}>
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}
          >
            <IoCloseOutline className={`w-6 h-6 ${textColor}`} />
          </button>

          <div className="flex justify-center mb-6">
            <div className={`w-20 h-20 ${cardBg} ${neumorphInset} rounded-full flex items-center justify-center`}>
              <IoAlertCircleOutline className="w-10 h-10 text-orange-500" />
            </div>
          </div>

          <h3 className={`text-2xl font-bold ${textColor} text-center mb-4`}>
            Pemberitahuan
          </h3>
          <p className={`${textMuted} text-center mb-6`}>
            {message}
          </p>

          <button
            onClick={onClose}
            className={`w-full ${cardBg} ${neumorph} rounded-xl py-4 ${textColor} font-bold text-lg hover:scale-105 transition-all duration-300`}
          >
            Mengerti
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="py-32 relative overflow-hidden transition-all duration-500">
      <Modal 
        show={showModal} 
        onClose={() => setShowModal(false)} 
        message={modalMessage}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-hidden ${headerVisible ? 'animate-slide-down' : ''}`}
        >
          <div className={`inline-flex items-center gap-2 ${cardBg} ${neumorph} rounded-full px-6 py-3 mb-6`}>
            <IoLayersOutline className="w-5 h-5 text-orange-500" />
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

        {/* Filters */}
        <div 
          ref={filtersRef}
          className={`flex flex-wrap justify-center gap-4 mb-16 scroll-hidden ${filtersVisible ? 'animate-fade-in delay-200' : ''}`}
        >
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

        {/* Carousel Container */}
        <div 
          ref={projectsRef}
          className={`relative scroll-hidden ${projectsVisible ? 'animate-slide-up' : ''}`}
        >
          {/* Navigation Buttons */}
          <button
            onClick={() => scrollCarousel('left')}
            disabled={isScrolling}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 ${cardBg} ${neumorph} w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 -ml-7 ${
              isScrolling ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
            }`}
            aria-label="Scroll Left"
          >
            <IoChevronBackOutline className={`w-7 h-7 ${textColor}`} />
          </button>

          <button
            onClick={() => scrollCarousel('right')}
            disabled={isScrolling}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 ${cardBg} ${neumorph} w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 -mr-7 ${
              isScrolling ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
            }`}
            aria-label="Scroll Right"
          >
            <IoChevronForwardOutline className={`w-7 h-7 ${textColor}`} />
          </button>

          {/* Projects Carousel */}
          <div
            ref={carouselRef}
            className={`flex overflow-x-auto scroll-smooth scrollbar-hide pb-8 ${
              swipeDirection === 'left' ? 'swipe-left' : swipeDirection === 'right' ? 'swipe-right' : ''
            }`}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              gap: '32px',
              scrollSnapType: 'x mandatory',
              scrollPaddingLeft: '0px'
            }}
          >
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`project-card ${cardBg} ${neumorph} rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer flex-shrink-0 flex flex-col ${
                    isScrolling ? (swipeDirection === 'right' ? 'swipe-out-left' : 'swipe-out-right') : ''
                  }`}
                  style={{
                    width: 'calc((100% - 32px) / 2)',
                    minWidth: 'calc((100% - 32px) / 2)',
                    height: '652px',
                    scrollSnapAlign: 'start',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex-shrink-0">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        style={{
                          objectPosition: project.id === 4 
                            ? 'center 30%'
                            : project.id === 6 
                            ? 'center top'
                            : 'center center'
                        }}
                      />
                    ) : (
                      <div className={`h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <Icon className="w-32 h-32 text-white" />
                      </div>
                    )}
                    
                    {/* Overlay on Hover */}
                    <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {project.isFigma ? (
                        <>
                          <button 
                            onClick={() => handleLinkClick(project.figmaLink, 'Figma Design')}
                            className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                            title="View Figma Design"
                          >
                            <SiFigma className="w-6 h-6 text-white" />
                          </button>
                          <button 
                            onClick={() => handleLinkClick(project.demoLink, 'Prototype Demo')}
                            className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                            title="View Prototype"
                          >
                            <IoOpenOutline className="w-6 h-6 text-white" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button 
                            onClick={() => handleLinkClick(project.githubLink, 'GitHub Repository')}
                            className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                            title="View GitHub Repository"
                          >
                            <IoLogoGithub className="w-6 h-6 text-white" />
                          </button>
                          <button 
                            onClick={() => handleLinkClick(project.demoLink, 'Live Demo')}
                            className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                            title="View Live Demo"
                          >
                            <IoOpenOutline className="w-6 h-6 text-white" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-gray-900">
                      {project.status}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Title Section */}
                    <div className="flex items-start justify-between mb-3" style={{ minHeight: '64px' }}>
                      <h3 
                        className={`text-xl font-bold ${textColor} flex-1 pr-2`}
                        style={{ 
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          lineHeight: '1.4'
                        }}
                      >
                        {project.title}
                      </h3>
                      {project.stars > 0 && (
                        <div className={`flex items-center gap-1 ${cardBg} ${neumorphInset} rounded-full px-3 py-1 flex-shrink-0`}>
                          <IoStarOutline className="w-4 h-4 text-yellow-500" />
                          <span className={`text-sm font-semibold ${textColor}`}>{project.stars}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p 
                      className={`${textMuted} text-sm mb-4`}
                      style={{ 
                        minHeight: '63px',
                        maxHeight: '63px',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        lineHeight: '1.5'
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4" style={{ minHeight: '76px' }}>
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className={`${cardBg} ${neumorphInset} rounded-full px-3 py-1 text-xs font-semibold ${textColor} h-fit`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      {project.isFigma ? (
                        <>
                          <button 
                            onClick={() => handleLinkClick(project.figmaLink, 'Figma Design')}
                            className={`flex-1 ${cardBg} ${neumorph} rounded-xl py-3 ${textColor} font-semibold text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}
                          >
                            <SiFigma className="w-4 h-4" />
                            View Design
                          </button>
                          <button 
                            onClick={() => handleLinkClick(project.demoLink, 'Prototype Demo')}
                            className={`flex-1 ${cardBg} ${neumorph} rounded-xl py-3 ${textColor} font-semibold text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}
                          >
                            <IoFlashOutline className="w-4 h-4" />
                            Prototype
                          </button>
                        </>
                      ) : (
                        <>
                          <button 
                            onClick={() => handleLinkClick(project.githubLink, 'GitHub Repository')}
                            className={`flex-1 ${cardBg} ${neumorph} rounded-xl py-3 ${textColor} font-semibold text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}
                          >
                            <IoCodeSlashOutline className="w-4 h-4" />
                            View Code
                          </button>
                          <button 
                            onClick={() => handleLinkClick(project.demoLink, 'Live Demo')}
                            className={`flex-1 ${cardBg} ${neumorph} rounded-xl py-3 ${textColor} font-semibold text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}
                          >
                            <IoFlashOutline className="w-4 h-4" />
                            Live Demo
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section - Update jumlah projects */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 scroll-hidden ${statsVisible ? 'animate-zoom-in' : ''}`}
        >
          {[
            { icon: IoRocketOutline, value: '6+', label: 'Projects Built' },
            { icon: IoCodeSlashOutline, value: '8+', label: 'Technologies' },
            { icon: IoPeopleOutline, value: '2+', label: 'Team Projects' },
            { icon: IoFlashOutline, value: '100+', label: 'Hours Coding' }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`${cardBg} ${neumorph} rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300`}
              >
                <Icon className={`w-10 h-10 ${textColor} mx-auto mb-3`} />
                <div className={`text-3xl font-bold ${textColor} mb-2`}>{stat.value}</div>
                <div className={`text-sm ${textMuted}`}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scroll-smooth {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        .project-card {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                      opacity 0.3s ease,
                      box-shadow 0.3s ease;
          will-change: transform, opacity;
        }
        
        .project-card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .project-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        @supports (scroll-snap-type: x mandatory) {
          .scroll-smooth {
            scroll-snap-type: x mandatory;
          }
          
          .project-card {
            scroll-snap-align: start;
            scroll-snap-stop: always;
          }
        }
        
        @keyframes swipeOutLeft {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateX(-30px) scale(0.95);
            opacity: 0.7;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes swipeOutRight {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateX(30px) scale(0.95);
            opacity: 0.7;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes swipeInLeft {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes swipeInRight {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .project-card.swipe-out-left {
          animation: swipeOutLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card.swipe-out-right {
          animation: swipeOutRight 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .swipe-left {
          animation: containerSwipeLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .swipe-right {
          animation: containerSwipeRight 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes containerSwipeLeft {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes containerSwipeRight {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-20px);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .project-card.visible {
          animation: fadeSlide 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Projects;
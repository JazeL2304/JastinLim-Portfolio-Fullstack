import { useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  IoRibbonOutline,
  IoCloseOutline,
  IoCalendarOutline,
  IoBusinessOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoDownloadOutline,
  IoShareSocialOutline
} from 'react-icons/io5';

// Import gambar sertifikat
import AIHuaweiImg from '../assets/photo/certificate/AIHuawei.jpg';
import DatabaseHuaweiImg from '../assets/photo/certificate/DatabaseHuawei.jpg';
import IntroductiontoPythonImg from '../assets/photo/certificate/IntroductiontoPython.jpg';
import PythonintermediateImg from '../assets/photo/certificate/PythonIntermediate.jpg';

function Certificate() {
  const { cardBg, textColor, textMuted, neumorph, neumorphInset } = useDarkMode();
  
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animation hooks
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [certsRef, certsVisible] = useScrollAnimation(0.1);
  const [statsRef, statsVisible] = useScrollAnimation(0.2);

  // Data sertifikat
  const certificates = [
    {
      id: 1,
      title: 'HCIA-AI V3.5 Course',
      issuer: 'Huawei',
      date: 'Mei 2025',
      category: 'Artificial Intelligence',
      description: 'Comprehensive certification covering AI fundamentals, machine learning algorithms, and deep learning frameworks.',
      image: AIHuaweiImg,
      skills: ['AI Fundamentals', 'Machine Learning', 'Deep Learning', 'Neural Networks']
    },
    {
      id: 2,
      title: 'HCIA-openGauss V1.0 Course',
      issuer: 'Huawei',
      date: 'Desember 2024',
      category: 'Database',
      description: 'Certification obtained through database learning focused on openGauss fundamentals, data management, and SQL operations.',
      image: DatabaseHuaweiImg,
      skills: ['Networking', 'TCP/IP', 'Routing', 'Switching']
    },
    {
      id: 3,
      title: 'Introduction to Python',
      issuer: 'Sololearn',
      date: 'February 2025',
      category: 'Programming',
      description: 'Basic Python learning course covering fundamental syntax, variables, loops, and functions.',
      image: IntroductiontoPythonImg,
      skills: ['Python', 'Data Structures', 'Algorithms', 'Data Analysis']
    },
    {
      id: 4,
      title: 'Python Intermediate',
      issuer: 'Sololearn',
      date: 'Mei 2025',
      category: 'Programming',
      description: 'Advanced Python programming concepts including OOP, decorators, generators, and advanced data structures.',
      image: PythonintermediateImg,
      skills: ['Python OOP', 'Decorators', 'Generators', 'Advanced Python']
    }
  ];

  const openModal = (cert, index) => {
    setSelectedCert(cert);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const navigateCert = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % certificates.length;
    } else {
      newIndex = currentIndex === 0 ? certificates.length - 1 : currentIndex - 1;
    }
    setCurrentIndex(newIndex);
    setSelectedCert(certificates[newIndex]);
  };

  const handleDownload = (image, title) => {
    // Create a temporary link to download
    const link = document.createElement('a');
    link.href = image;
    link.download = `${title.replace(/\s+/g, '_')}_Certificate.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async (cert) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: cert.title,
          text: `Check out my ${cert.title} certificate from ${cert.issuer}!`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy link to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Stats calculation
  const totalCerts = certificates.length;
  const uniqueIssuers = [...new Set(certificates.map(c => c.issuer))].length;
  const categories = [...new Set(certificates.map(c => c.category))].length;

  // Modal Component
  const CertificateModal = () => {
    if (!selectedCert) return null;

    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={closeModal}
        />
        
        <div className={`relative ${cardBg} ${neumorph} rounded-3xl max-w-5xl w-full mx-4 overflow-hidden transform transition-all duration-300`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
            <h3 className={`text-2xl font-bold ${textColor}`}>
              {selectedCert.title}
            </h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleDownload(selectedCert.image, selectedCert.title)}
                className={`w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}
                title="Download Certificate"
              >
                <IoDownloadOutline className={`w-5 h-5 ${textColor}`} />
              </button>
              <button
                onClick={() => handleShare(selectedCert)}
                className={`w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}
                title="Share Certificate"
              >
                <IoShareSocialOutline className={`w-5 h-5 ${textColor}`} />
              </button>
              <button
                onClick={closeModal}
                className={`w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}
              >
                <IoCloseOutline className={`w-6 h-6 ${textColor}`} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Certificate Image */}
              <div className="relative">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => navigateCert('prev')}
                  className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}
                >
                  <IoChevronBackOutline className={`w-6 h-6 ${textColor}`} />
                </button>
                <button
                  onClick={() => navigateCert('next')}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}
                >
                  <IoChevronForwardOutline className={`w-6 h-6 ${textColor}`} />
                </button>
              </div>

              {/* Certificate Details */}
              <div className="space-y-6">
                <div>
                  <span className={`inline-block ${cardBg} ${neumorphInset} rounded-full px-4 py-2 text-sm font-semibold ${textColor} mb-4`}>
                    {selectedCert.category}
                  </span>
                  <p className={`${textMuted} leading-relaxed`}>
                    {selectedCert.description}
                  </p>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className={`${cardBg} ${neumorphInset} rounded-xl p-4`}>
                    <IoBusinessOutline className={`w-6 h-6 ${textColor} mb-2`} />
                    <p className={`text-xs ${textMuted} mb-1`}>Issued By</p>
                    <p className={`text-sm font-bold ${textColor}`}>{selectedCert.issuer}</p>
                  </div>
                  <div className={`${cardBg} ${neumorphInset} rounded-xl p-4`}>
                    <IoCalendarOutline className={`w-6 h-6 ${textColor} mb-2`} />
                    <p className={`text-xs ${textMuted} mb-1`}>Issued Date</p>
                    <p className={`text-sm font-bold ${textColor}`}>{selectedCert.date}</p>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className={`text-lg font-bold ${textColor} mb-3`}>Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`${cardBg} ${neumorph} rounded-full px-4 py-2 text-sm font-semibold ${textColor}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate Counter */}
                <div className={`${cardBg} ${neumorphInset} rounded-xl p-4 text-center`}>
                  <p className={`text-sm ${textMuted}`}>
                    Certificate {currentIndex + 1} of {certificates.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-32 transition-all duration-500 relative overflow-hidden">
      <CertificateModal />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-hidden ${headerVisible ? 'animate-slide-down' : ''}`}
        >
          <div className={`inline-flex items-center gap-2 ${cardBg} ${neumorph} rounded-full px-5 py-2.5 mb-6`}>
            <IoRibbonOutline className="w-5 h-5 text-orange-500" />
            <span className={`text-sm font-medium ${textColor}`}>My Achievements</span>
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-extrabold ${textColor} mb-6`}>
            Certificates &{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
          <p className={`text-lg ${textMuted} max-w-2xl mx-auto`}>
            Professional certifications and achievements that validate my technical expertise
          </p>
        </div>

        {/* Certificates Grid */}
        <div 
          ref={certsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 scroll-hidden ${certsVisible ? 'animate-zoom-in' : ''}`}
        >
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => openModal(cert, index)}
              className={`${cardBg} ${neumorph} rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Info */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center`}>
                      <IoRibbonOutline className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white font-bold text-lg">View Certificate</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-gray-900">
                  {cert.category}
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className={`text-xl font-bold ${textColor} mb-2`}>
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <IoBusinessOutline className={`w-4 h-4 ${textMuted}`} />
                    <span className={`text-sm ${textMuted}`}>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoCalendarOutline className={`w-4 h-4 ${textMuted}`} />
                    <span className={`text-sm ${textMuted}`}>{cert.date}</span>
                  </div>
                </div>

                <p className={`${textMuted} text-sm line-clamp-2`}>
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 scroll-hidden ${statsVisible ? 'animate-fade-in delay-200' : ''}`}
        >
          {[
            { label: 'Total Certificates', value: totalCerts, icon: IoRibbonOutline },
            { label: 'Unique Issuers', value: uniqueIssuers, icon: IoBusinessOutline },
            { label: 'Categories', value: categories, icon: IoCalendarOutline }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`${cardBg} ${neumorph} rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300`}
              >
                <Icon className={`w-10 h-10 ${textColor} mx-auto mb-3`} />
                <div className={`text-4xl font-bold ${textColor} mb-2`}>{stat.value}</div>
                <div className={`text-sm ${textMuted}`}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default Certificate;
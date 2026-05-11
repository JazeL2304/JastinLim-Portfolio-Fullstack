import { useState, useMemo, useCallback, memo, useEffect } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  IoLogoGithub,
  IoOpenOutline,
  IoCodeSlashOutline,
  IoFlashOutline,
  IoGlobeOutline,
  IoBrushOutline,
  IoGameControllerOutline,
  IoMedicalOutline,
  IoListOutline,
  IoCloseOutline,
  IoAlertCircleOutline,
  IoLayersOutline,
} from 'react-icons/io5';
import { SiFigma } from 'react-icons/si';
import SumateraUtaraImg from '../assets/photo/project/SumateraUtaraProject.png';
import PTSumberCahayaImg from '../assets/photo/project/PTSumberCahayaTimurProject.png';
import HarbourMindImg from '../assets/photo/project/HarbourMindProject.png';
import TheLazyJannahImg from '../assets/photo/project/TheLazyJannahProject.png';
import AplikasiRSRJProjectImg from '../assets/photo/project/AplikasiRSRJProject.png';
import TodolistProjectImg from '../assets/photo/project/TodolistProject.png';
import CoWasteImg from '../assets/photo/project/CoWaste.png';
import TunasMahardikaImg from '../assets/photo/project/TunasMahardika.png';
import FOLKSInstituteWebsiteImg from '../assets/photo/project/FOLKSInstituteWebsite.png';

// Modal
const Modal = memo(({ show, onClose, message }) => {
  if (!show) return null;
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      <div
        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)' }}
        onClick={onClose}
      />
      <div
        style={{
          position: 'relative',
          background: '#fff',
          border: '3px solid #000',
          boxShadow: '8px 8px 0 #000',
          padding: '40px 32px',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
          }}
        >
          <IoCloseOutline size={24} />
        </button>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <IoAlertCircleOutline size={48} color="#FF3300" />
        </div>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: '20px',
            textAlign: 'center',
            marginBottom: '12px',
            color: '#000',
          }}
        >
          NOTICE
        </h3>
        <p
          style={{
            fontSize: '14px',
            color: '#555',
            textAlign: 'center',
            marginBottom: '24px',
            lineHeight: 1.6,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {message}
        </p>
        <button className="nb-btn" style={{ width: '100%', justifyContent: 'center' }} onClick={onClose}>
          GOT IT
        </button>
      </div>
    </div>
  );
});

// ─── Project Detail Modal ────────────────────────────────────────
const ProjectDetailModal = memo(function ProjectDetailModal({ project, onClose, handleLinkClick }) {
  if (!project) return null;
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.75)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          border: '3px solid #000',
          boxShadow: '8px 8px 0 #000',
          width: '100%',
          maxWidth: '600px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '20px 24px 16px',
          borderBottom: '2px solid #f0f0f0',
          display: 'flex', alignItems: 'flex-start', gap: '12px',
        }}>
          <IoLayersOutline size={22} color="#FF3300" style={{ flexShrink: 0, marginTop: '3px' }} />
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900, fontSize: '18px',
              color: '#000', margin: 0, marginBottom: '4px',
            }}>
              {project.title}
            </h3>
            <span style={{
              display: 'inline-block',
              background: '#000', color: '#fff',
              fontSize: '10px', fontWeight: 700, padding: '2px 8px',
              fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.05em',
            }}>
              {project.status.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex' }}
          >
            <IoCloseOutline size={22} color="#000" />
          </button>
        </div>

        {/* Image */}
        <div style={{ borderBottom: '2px solid #f0f0f0', overflow: 'hidden', height: '260px' }}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                objectPosition: project.id === 4 ? 'center 30%' : project.id === 6 ? 'center top' : 'center center',
              }}
            />
          ) : (
            <div style={{
              height: '100%', background: '#111',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <project.icon size={64} color="#FF3300" />
            </div>
          )}
        </div>

        {/* Tech stack */}
        <div style={{ padding: '16px 24px', borderBottom: '2px solid #f0f0f0', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.techStack.map((tech, i) => (
            <span key={i} className="nb-tag-outline" style={{ fontSize: '11px' }}>{tech}</span>
          ))}
        </div>

        {/* About this project */}
        <div style={{ padding: '16px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <IoLayersOutline size={16} color="#000" />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: '14px', color: '#000',
            }}>About this project</span>
          </div>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '13px', color: '#555', lineHeight: 1.7, margin: '0 0 20px',
          }}>
            {project.description}
          </p>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {project.isFigma ? (
              <>
                <button
                  onClick={() => handleLinkClick(project.figmaLink, 'Figma Design')}
                  className="nb-btn"
                  style={{ fontSize: '12px', padding: '10px 20px' }}
                >
                  <SiFigma size={12} /> VIEW DESIGN
                </button>
                <button
                  onClick={() => handleLinkClick(project.demoLink, 'Prototype Demo')}
                  className="nb-btn nb-btn-outline nb-border"
                  style={{ fontSize: '12px', padding: '10px 20px' }}
                >
                  <IoFlashOutline size={12} /> PROTOTYPE
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleLinkClick(project.demoLink, 'Live Demo')}
                  className="nb-btn"
                  style={{ fontSize: '12px', padding: '10px 20px' }}
                >
                  <IoOpenOutline size={12} /> LIVE DEMO
                </button>
                <button
                  onClick={() => handleLinkClick(project.githubLink, 'GitHub Repository')}
                  className="nb-btn nb-btn-outline nb-border"
                  style={{ fontSize: '12px', padding: '10px 20px' }}
                >
                  <IoCodeSlashOutline size={12} /> VIEW CODE
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

// ─── Project Card ─────────────────────────────────────────────────
const ProjectCard = memo(function ProjectCard({ project, onCardClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onCardClick(project)}
      style={{
        border: `3px solid ${hovered ? '#FF3300' : '#000'}`,
        boxShadow: hovered ? '2px 2px 0 #000' : '5px 5px 0 #000',
        transform: hovered ? 'translate(3px, 3px)' : 'none',
        transition: 'all 0.18s ease',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden', borderBottom: '3px solid #000' }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              objectPosition:
                project.id === 4 ? 'center 30%'
                  : project.id === 6 ? 'center top'
                    : 'center center',
              transition: 'transform 0.4s ease',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        ) : (
          <div style={{ height: '100%', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <project.icon size={64} color="#FF3300" />
          </div>
        )}

        {/* Status badge */}
        <div style={{
          position: 'absolute', top: '12px', right: '12px',
          background: '#000', color: '#fff', fontSize: '10px',
          fontWeight: 700, padding: '4px 10px',
          fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.05em',
        }}>
          {project.status.toUpperCase()}
        </div>

        {/* Hover overlay — slides up from bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'rgba(0,0,0,0.82)', padding: '12px 14px',
          transform: hovered ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.3s ease',
          display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          <IoLayersOutline size={13} color="#FF3300" />
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '11px', color: '#fff', fontWeight: 700, letterSpacing: '0.05em',
          }}>
            CLICK TO VIEW DETAILS
          </span>
        </div>
      </div>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', padding: '12px 16px', borderBottom: '1px solid #eee' }}>
        {project.techStack.map((tech, i) => (
          <span key={i} className="nb-tag-outline" style={{ fontSize: '10px' }}>{tech}</span>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: '16px', flex: 1 }}>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700, fontSize: '15px', color: '#000',
          marginBottom: '6px', marginTop: 0,
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: '13px', color: '#666', lineHeight: 1.5, margin: 0,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          fontFamily: "'Space Grotesk', sans-serif",
        }}>
          {project.description}
        </p>
      </div>
    </div>
  );
});

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [startIdx, setStartIdx] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [filtersRef, filtersVisible] = useScrollAnimation(0.1);
  const [projectsRef, projectsVisible] = useScrollAnimation(0.1);

  const projects = useMemo(() => [
    {
      id: 1,
      title: 'Website Pengenalan Budaya Sumatera Utara',
      description: 'Website informatif yang menampilkan kekayaan budaya Sumatera Utara dengan desain modern dan interaktif menggunakan React JS.',
      category: 'Web App',
      techStack: ['React JS', 'CSS', 'JavaScript'],
      icon: IoGlobeOutline,
      image: SumateraUtaraImg,
      status: 'Production',
      githubLink: '',
      demoLink: '',
      isFigma: false,
    },
    {
      id: 2,
      title: 'PT. Sumber Cahaya Timur — Company Profile',
      description: 'Website company profile modern dengan desain responsive dan animasi smooth menggunakan React Vite dan Tailwind CSS.',
      category: 'Web App',
      techStack: ['React Vite', 'Tailwind CSS', 'JavaScript'],
      icon: IoGlobeOutline,
      image: PTSumberCahayaImg,
      status: 'Production',
      githubLink: 'https://github.com/JazeL2304/sct-company-profile',
      demoLink: 'https://sctv1.vercel.app/',
      isFigma: false,
    },
    {
      id: 3,
      title: 'Todolist Website',
      description: 'Website todo list modern dengan fitur CRUD lengkap, filter tasks, dan storage untuk menyimpan data. Dibangun dengan PHP dan MySQL.',
      category: 'Web App',
      techStack: ['PHP', 'MySQL'],
      icon: IoListOutline,
      image: TodolistProjectImg,
      status: 'Production',
      githubLink: 'https://github.com/JazeL2304/TODOLIST_PROJECT',
      demoLink: '',
      isFigma: false,
    },
    {
      id: 4,
      title: 'HarbourMind — Prototype Aplikasi',
      description: 'Prototype aplikasi mobile untuk manajemen kesehatan mental dengan UI/UX yang user-friendly dan modern, dibuat menggunakan Figma.',
      category: 'Design',
      techStack: ['Figma', 'UI/UX Design', 'Prototyping'],
      icon: IoBrushOutline,
      image: HarbourMindImg,
      status: 'Prototype',
      figmaLink: 'https://www.figma.com/design/UgzaPg9hD6fEnlUj8VcX4G/Mockup-aplikasi-kesehatan-mental--HarbourMind-?node-id=0-1&t=x3kAft9AbiLnmJaO-1',
      demoLink: 'https://www.figma.com/proto/UgzaPg9hD6fEnlUj8VcX4G/Mockup-aplikasi-kesehatan-mental--HarbourMind-?node-id=27-6866&t=LdzlayKvKEIlHaUz-1&starting-point-node-id=27%3A6853',
      isFigma: true,
    },
    {
      id: 5,
      title: 'The Lazy Jannah — Game',
      description: 'Game interaktif yang dikembangkan menggunakan Unity dan C# dengan gameplay menarik dan grafis yang memukau.',
      category: 'Game',
      techStack: ['Unity', 'C#', 'Game Development'],
      icon: IoGameControllerOutline,
      image: TheLazyJannahImg,
      status: 'Production',
      githubLink: 'https://github.com/JazeL2304/TheLazyJannah',
      demoLink: '',
      isFigma: false,
    },
    {
      id: 6,
      title: 'Aplikasi Rumah Sakit Rawat Jalan',
      description: 'Aplikasi mobile untuk manajemen rawat jalan rumah sakit dengan fitur pendaftaran pasien, jadwal dokter, dan riwayat medis.',
      category: 'Mobile App',
      techStack: ['Kotlin', 'Android Studio', 'Firebase'],
      icon: IoMedicalOutline,
      image: AplikasiRSRJProjectImg,
      status: 'Development',
      githubLink: 'https://github.com/JazeL2304/PROJECT_ANTRIAN_RSRJ_KELOMPOK_2',
      demoLink: '',
      isFigma: false,
    },
    {
      id: 7,
      title: 'CoWaste — UI/UX Design',
      description: 'Desain UI/UX aplikasi pengelolaan sampah berbasis komunitas dengan pendekatan gamifikasi untuk mendorong partisipasi warga dalam menjaga kebersihan lingkungan.',
      category: 'Design',
      techStack: ['Figma', 'UI/UX Design', 'Prototyping'],
      icon: IoBrushOutline,
      image: CoWasteImg,
      status: 'Prototype',
      figmaLink: 'https://www.figma.com/design/rgtHJHgombG6W97CAwf0XL/Co-Waste?node-id=93-6153&t=ogMbK1z56vzWF0ki-1',
      demoLink: 'https://www.figma.com/proto/rgtHJHgombG6W97CAwf0XL/Co-Waste?node-id=291-805&p=f&viewport=95%2C236%2C0.09&t=vMIqg8VDWFgNRREi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=256%3A3862&show-proto-sidebar=1&page-id=93%3A6153',
      isFigma: true,
    },
    {
      id: 8,
      title: 'Tunas Mahardika — Company Profile',
      description: 'Website company profile modern untuk Tunas Mahardika dengan sistem manajemen konten berbasis Laravel, desain responsif, dan antarmuka yang bersih dan profesional.',
      category: 'Web App',
      techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
      icon: IoGlobeOutline,
      image: TunasMahardikaImg,
      status: 'Production',
      githubLink: '',
      demoLink: 'https://mahardikabsd.site/',
      isFigma: false,
    },
    {
      id: 9,
      title: 'FOLKS Institute — Training & Certification Website',
      description: 'Platform website untuk FOLKS Institute yang menyediakan layanan pelatihan dan sertifikasi profesional dengan sistem manajemen kursus yang terintegrasi.layanan edukasi bahasa Inggris yang menyediakan program pembelajaran interaktif, kelas profesional, dan sistem manajemen belajar terintegrasi untuk membantu pengguna meningkatkan kemampuan bahasa Inggris secara efektif.',
      category: 'Web App',
      techStack: ['React JS', 'Tailwind CSS', 'Node JS', 'Supabase'],
      icon: IoGlobeOutline,
      image: FOLKSInstituteWebsiteImg,
      status: 'Production',
      githubLink: '',
      demoLink: '',
      isFigma: false,
    },
  ], []);

  const filters = ['All', 'Web App', 'Mobile App', 'Design', 'Game'];

  const filteredProjects = useMemo(() =>
    selectedFilter === 'All' ? projects : projects.filter((p) => p.category === selectedFilter),
    [selectedFilter, projects]
  );

  // Reset carousel when filter changes
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setStartIdx(0);
  };

  const maxStart = Math.max(0, filteredProjects.length - visibleItems);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIdx((prev) => (prev >= maxStart ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxStart]);

  const canPrev = startIdx > 0;
  const canNext = startIdx < maxStart;
  const visibleProjects = filteredProjects.slice(startIdx, startIdx + visibleItems);
  const goPrev = () => setStartIdx((i) => Math.max(0, i - 1));
  const goNext = () => setStartIdx((i) => Math.min(maxStart, i + 1));

  const handleLinkClick = useCallback((link, type) => {
    if (!link || link.trim() === '') {
      setModalMessage(`Untuk sementara bagian ${type} belum tersedia`);
      setShowModal(true);
    } else {
      window.open(link, '_blank');
    }
  }, []);

  return (
    <div
      style={{
        background: '#fff',
        padding: '100px 40px',
        overflow: 'hidden',
      }}
    >
      <Modal show={showModal} onClose={() => setShowModal(false)} message={modalMessage} />
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        handleLinkClick={handleLinkClick}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div
          ref={headerRef}
          className={`scroll-hidden ${headerVisible ? 'animate-slide-down' : ''}`}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: '12px' }}>/ PROJECT</div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: '#000',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              SELECTED WORKS.
            </h2>
          </div>

          {/* Carousel nav buttons */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#888', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, marginRight: '8px' }}>
              {Math.min(startIdx + 1, filteredProjects.length)} – {Math.min(startIdx + visibleItems, filteredProjects.length)} / {filteredProjects.length}
            </span>
            <button
              onClick={goPrev}
              disabled={!canPrev}
              style={{
                width: '44px', height: '44px',
                background: canPrev ? '#000' : '#ddd',
                border: `3px solid ${canPrev ? '#000' : '#ccc'}`,
                boxShadow: canPrev ? '3px 3px 0 #000' : 'none',
                cursor: canPrev ? 'pointer' : 'not-allowed',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => { if (canPrev) { e.currentTarget.style.background = '#FF3300'; e.currentTarget.style.borderColor = '#FF3300'; } }}
              onMouseLeave={(e) => { if (canPrev) { e.currentTarget.style.background = '#000'; e.currentTarget.style.borderColor = '#000'; } }}
            >
              <IoChevronBackOutline size={18} color={canPrev ? '#fff' : '#aaa'} />
            </button>
            <button
              onClick={goNext}
              disabled={!canNext}
              style={{
                width: '44px', height: '44px',
                background: canNext ? '#000' : '#ddd',
                border: `3px solid ${canNext ? '#000' : '#ccc'}`,
                boxShadow: canNext ? '3px 3px 0 #000' : 'none',
                cursor: canNext ? 'pointer' : 'not-allowed',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => { if (canNext) { e.currentTarget.style.background = '#FF3300'; e.currentTarget.style.borderColor = '#FF3300'; } }}
              onMouseLeave={(e) => { if (canNext) { e.currentTarget.style.background = '#000'; e.currentTarget.style.borderColor = '#000'; } }}
            >
              <IoChevronForwardOutline size={18} color={canNext ? '#fff' : '#aaa'} />
            </button>
          </div>
        </div>

        {/* Filter buttons */}
        <div
          ref={filtersRef}
          className={`scroll-hidden ${filtersVisible ? 'animate-fade-in delay-200' : ''}`}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              style={{
                background: selectedFilter === filter ? '#000' : '#fff',
                color: selectedFilter === filter ? '#fff' : '#000',
                border: '2px solid #000',
                padding: '8px 20px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => {
                if (selectedFilter !== filter) {
                  e.currentTarget.style.background = '#FF3300';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#FF3300';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedFilter !== filter) {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.color = '#000';
                  e.currentTarget.style.borderColor = '#000';
                }
              }}
            >
              {filter.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Carousel Grid */}
        <div
          ref={projectsRef}
          className={`scroll-hidden ${projectsVisible ? 'animate-slide-up' : ''}`}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${visibleItems}, 1fr)`,
              gap: '24px',
            }}
          >
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onCardClick={setSelectedProject}
              />
            ))}
          </div>

          {/* Dot indicators */}
          {maxStart > 0 && (
            <div style={{ display: 'flex', gap: '6px', marginTop: '24px', justifyContent: 'center' }}>
              {Array.from({ length: maxStart + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStartIdx(i)}
                  style={{
                    width: i === startIdx ? '24px' : '8px',
                    height: '8px',
                    background: i === startIdx ? '#FF3300' : '#ccc',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
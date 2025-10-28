import { useState } from 'react';
import reactIcon from '../assets/photo/react.png';
import laravelIcon from '../assets/photo/laravel.png';
import mysqlIcon from '../assets/photo/mysql.png';
import tailwindIcon from '../assets/photo/tailwind.png';
import javascriptIcon from '../assets/photo/javascript.png';
import pythonIcon from '../assets/photo/python.png';
import unityIcon from '../assets/photo/unity.png';
import figmaIcon from '../assets/photo/figma.png';
import androidStudioIcon from '../assets/photo/androidstudio.png';
import kotlinIcon from '../assets/photo/kotlin.png';
import phpIcon from '../assets/photo/php.png';

function Skills() {
  const [isDark, setIsDark] = useState(true);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'React', icon: reactIcon, level: 70, category: 'Frontend' },
    { name: 'JavaScript', icon: javascriptIcon, level: 75, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: tailwindIcon, level: 80, category: 'Frontend' },
    { name: 'Laravel', icon: laravelIcon, level: 65, category: 'Backend' },
    { name: 'PHP', icon: phpIcon, level: 70, category: 'Backend' },
    { name: 'MySQL', icon: mysqlIcon, level: 68, category: 'Backend' },
    { name: 'Android Studio', icon: androidStudioIcon, level: 60, category: 'Mobile' },
    { name: 'Kotlin', icon: kotlinIcon, level: 55, category: 'Mobile' },
    { name: 'Unity', icon: unityIcon, level: 50, category: 'Game Dev' },
    { name: 'Python', icon: pythonIcon, level: 60, category: 'Programming' },
    { name: 'Figma', icon: figmaIcon, level: 72, category: 'Design' }
  ];

  const bgClass = isDark 
    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
    : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300';
  
  const cardBg = isDark ? 'bg-gray-800' : 'bg-gray-200';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600';
  
  const neumorph = isDark
    ? 'shadow-[8px_8px_16px_#0a0a0a,-8px_-8px_16px_#2a2a2a]'
    : 'shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]';
    
  const neumorphInset = isDark
    ? 'shadow-[inset_8px_8px_16px_#0a0a0a,inset_-8px_-8px_16px_#2a2a2a]'
    : 'shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]';

  return (
    <div className={`min-h-screen ${bgClass} py-20 relative overflow-hidden transition-all duration-500`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-8 right-8 z-50 w-14 h-14 rounded-full ${cardBg} ${neumorph} flex items-center justify-center transition-all duration-300 hover:scale-110 text-2xl`}
      >
        {isDark ? '🌙' : '☀️'}
      </button>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 ${cardBg} ${neumorph} rounded-full px-5 py-2.5 mb-6`}>
            <span className="text-xl">📚</span>
            <span className={`text-sm font-medium ${textColor}`}>My Skillset</span>
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-extrabold ${textColor} mb-6`}>
            Technical{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className={`text-lg ${textMuted} max-w-2xl mx-auto`}>
            Technologies I've learned and worked with during my studies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`${cardBg} ${neumorph} rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 cursor-pointer`}
            >
              {/* Skill Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 ${cardBg} ${neumorphInset} rounded-xl p-2.5 flex items-center justify-center transform transition-transform duration-300 ${
                  hoveredSkill === skill.name ? 'scale-110' : ''
                }`}>
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className={`text-base font-bold ${textColor} mb-1`}>{skill.name}</h3>
                  <p className={`text-xs ${textMuted}`}>{skill.category}</p>
                </div>
                <div className={`${cardBg} ${neumorphInset} rounded-full px-3 py-1`}>
                  <span className={`text-sm font-bold ${textColor}`}>{skill.level}%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className={`${cardBg} ${neumorphInset} rounded-full h-3 overflow-hidden relative`}>
                <div
                  className={`h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                  style={{ 
                    width: hoveredSkill === skill.name ? `${skill.level}%` : '0%'
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Journey */}
        <div className={`${cardBg} ${neumorph} rounded-3xl p-8 md:p-12 mb-12`}>
          <h3 className={`text-3xl font-bold ${textColor} mb-8 text-center`}>
            My Learning Journey
          </h3>
          
          <div className="space-y-6">
            {[
              { 
                year: '2023', 
                title: 'Started Web Development', 
                desc: 'Learned HTML, CSS, and JavaScript basics',
                status: '✅ Completed'
              },
              { 
                year: '2024', 
                title: 'Full-Stack Development', 
                desc: 'Built projects with React, Laravel, and MySQL',
                status: '✅ Completed'
              },
              { 
                year: '2024', 
                title: 'Mobile Development', 
                desc: 'Started learning Android development with Kotlin',
                status: '🔄 In Progress'
              },
              { 
                year: '2025', 
                title: 'Advanced Topics', 
                desc: 'Planning to learn cloud services and DevOps',
                status: '📅 Upcoming'
              }
            ].map((milestone, index) => (
              <div
                key={index}
                className={`${cardBg} ${neumorph} rounded-2xl p-6 transform transition-all duration-300 hover:scale-102`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${cardBg} ${neumorphInset} rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl`}>
                    {milestone.year === '2023' ? '🌱' : milestone.year === '2024' && index === 1 ? '🚀' : milestone.year === '2024' && index === 2 ? '📱' : '⚡'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className={`text-sm font-bold text-orange-500`}>{milestone.year}</span>
                        <h4 className={`text-lg font-bold ${textColor}`}>{milestone.title}</h4>
                      </div>
                      <span className={`text-xs ${textMuted} ${cardBg} ${neumorphInset} px-3 py-1 rounded-full`}>
                        {milestone.status}
                      </span>
                    </div>
                    <p className={`${textMuted} text-sm`}>{milestone.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div className={`${cardBg} ${neumorph} rounded-2xl p-8 text-center`}>
          <span className="text-4xl mb-4 block">🎯</span>
          <h4 className={`text-xl font-bold ${textColor} mb-3`}>Currently Focusing On</h4>
          <p className={`${textMuted} mb-6`}>
            Building real-world projects and improving my problem-solving skills
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Clean Code', 'Problem Solving', 'UI/UX Design', 'Best Practices'].map((focus, i) => (
              <span
                key={i}
                className={`${cardBg} ${neumorphInset} rounded-full px-5 py-2.5 text-sm font-semibold ${textColor}`}
              >
                {focus}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default Skills;
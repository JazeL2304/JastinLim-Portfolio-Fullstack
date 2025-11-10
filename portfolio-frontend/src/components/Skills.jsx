import { useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { 
  IoBookOutline,
  IoLeafOutline,
  IoRocketOutline,
  IoPhonePortraitOutline,
  IoRadioButtonOnOutline,
  IoCheckmarkCircleOutline,
  IoTimeOutline
} from 'react-icons/io5';
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
import csharpIcon from '../assets/photo/csharp.png';

function Skills() {
  const { cardBg, textColor, textMuted, neumorph, neumorphInset } = useDarkMode();
  
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Skills diurutkan berdasarkan level (tertinggi ke terendah)
  const skills = [
    { name: 'Tailwind CSS', icon: tailwindIcon, level: 80, category: 'Frontend' },
    { name: 'React', icon: reactIcon, level: 80, category: 'Frontend' },
    { name: 'JavaScript', icon: javascriptIcon, level: 75, category: 'Frontend' },
    { name: 'Figma', icon: figmaIcon, level: 75, category: 'Design' },
    { name: 'PHP', icon: phpIcon, level: 70, category: 'Backend' },
    { name: 'Laravel', icon: laravelIcon, level: 70, category: 'Backend' },
    { name: 'MySQL', icon: mysqlIcon, level: 70, category: 'Backend' },
    { name: 'Python', icon: pythonIcon, level: 60, category: 'Programming' },
    { name: 'Android Studio', icon: androidStudioIcon, level: 50, category: 'Mobile' },
    { name: 'Kotlin', icon: kotlinIcon, level: 50, category: 'Mobile' },
    { name: 'Unity', icon: unityIcon, level: 50, category: 'Game Dev' },
    { name: 'C#', icon: csharpIcon, level: 50, category: 'Game Dev' }
  ];

  return (
    <div className="py-32 relative overflow-hidden transition-all duration-500">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 ${cardBg} ${neumorph} rounded-full px-5 py-2.5 mb-6`}>
            <IoBookOutline className="w-5 h-5 text-orange-500" />
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
                status: 'Completed',
                icon: IoLeafOutline
              },
              { 
                year: '2024', 
                title: 'Full-Stack Development', 
                desc: 'Built projects with React, Laravel, and MySQL',
                status: 'Completed',
                icon: IoRocketOutline
              },
              { 
                year: '2024', 
                title: 'Mobile & Game Development', 
                desc: 'Started learning Android development with Kotlin and Unity with C#',
                status: 'In Progress',
                icon: IoPhonePortraitOutline
              },
            ].map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={index}
                  className={`${cardBg} ${neumorph} rounded-2xl p-6 transform transition-all duration-300 hover:scale-102`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${cardBg} ${neumorphInset} rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${textColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className={`text-sm font-bold text-orange-500`}>{milestone.year}</span>
                          <h4 className={`text-lg font-bold ${textColor}`}>{milestone.title}</h4>
                        </div>
                        <span className={`text-xs ${textMuted} ${cardBg} ${neumorphInset} px-3 py-1 rounded-full flex items-center gap-1`}>
                          {milestone.status === 'Completed' ? (
                            <IoCheckmarkCircleOutline className="w-4 h-4 text-green-500" />
                          ) : (
                            <IoTimeOutline className="w-4 h-4 text-orange-500" />
                          )}
                          {milestone.status}
                        </span>
                      </div>
                      <p className={`${textMuted} text-sm`}>{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Currently Learning */}
        <div className={`${cardBg} ${neumorph} rounded-2xl p-8 text-center`}>
          <IoRadioButtonOnOutline className={`w-12 h-12 ${textColor} mx-auto mb-4`} />
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
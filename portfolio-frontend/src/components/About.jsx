import { useDarkMode } from '../contexts/DarkModeContext';
import { 
  IoHandRightOutline,
  IoSchoolOutline,
  IoLocationOutline,
  IoBriefcaseOutline,
  IoLanguageOutline,
  IoCodeSlashOutline,
  IoCafeOutline,
  IoGameControllerOutline,
  IoBookOutline
} from 'react-icons/io5';
import myPhoto from '../assets/photo/FOTO_JASTIN_1.jpg';

function About() {
  const { cardBg, textColor, textMuted, neumorph, neumorphInset } = useDarkMode();

  return (
    <div className="py-32 transition-all duration-500 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* ABOUT SECTION */}
        <section>
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 ${cardBg} ${neumorph} rounded-full px-5 py-2.5 mb-6`}>
              <IoHandRightOutline className="w-5 h-5 text-orange-500" />
              <span className={`text-sm font-medium ${textColor}`}>Get to Know Me</span>
            </div>
            
            <h2 className={`text-5xl md:text-6xl font-extrabold ${textColor} mb-6`}>
              About{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image */}
            <div className="relative">
              <div className={`${cardBg} ${neumorph} rounded-3xl p-6 transform hover:scale-105 transition-all duration-500`}>
                <div className={`aspect-square rounded-2xl relative overflow-hidden ${neumorphInset}`}>
                  <img 
                    src={myPhoto}
                    alt="Jastin Lim"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              <div className="absolute -z-10 top-10 -left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />
              <div className="absolute -z-10 bottom-10 -right-10 w-32 h-32 bg-red-500/20 rounded-full blur-2xl" />
            </div>

            {/* Right: About Content */}
            <div className="space-y-6">
              <div className={`${cardBg} ${neumorph} rounded-2xl p-8`}>
                <h3 className={`text-2xl font-bold ${textColor} mb-4`}>
                  Student & Aspiring Developer
                </h3>
                <p className={`${textMuted} leading-relaxed mb-4`}>
                  Hi! I'm <span className={`${textColor} font-semibold`}>Jastin Lim</span>, a Computer Science student based in Tangerang, Indonesia. 
                  I'm passionate about learning web development and building useful applications.
                </p>
                <p className={`${textMuted} leading-relaxed mb-4`}>
                  Currently, I'm focusing on improving my skills in React, Laravel, and mobile development. 
                  I enjoy turning ideas into reality through code and always eager to learn new technologies.
                </p>
                <p className={`${textMuted} leading-relaxed`}>
                  When I'm not coding, you can find me exploring new tech tutorials, working on side projects, 
                  or playing video games to relax.
                </p>
              </div>

              {/* Quick Facts */}
              <div className={`${cardBg} ${neumorphInset} rounded-2xl p-6 space-y-3`}>
                <div className="flex items-center justify-between">
                  <span className={`${textMuted} text-sm flex items-center gap-2`}>
                    <IoSchoolOutline className="w-4 h-4" />
                    Education
                  </span>
                  <span className={`${textColor} text-sm font-semibold`}>Computer Science Student</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${textMuted} text-sm flex items-center gap-2`}>
                    <IoLocationOutline className="w-4 h-4" />
                    Location
                  </span>
                  <span className={`${textColor} text-sm font-semibold`}>Tangerang, Indonesia</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${textMuted} text-sm flex items-center gap-2`}>
                    <IoBriefcaseOutline className="w-4 h-4" />
                    Status
                  </span>
                  <span className={`${textColor} text-sm font-semibold`}>Open to Internship</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${textMuted} text-sm flex items-center gap-2`}>
                    <IoLanguageOutline className="w-4 h-4" />
                    Languages
                  </span>
                  <span className={`${textColor} text-sm font-semibold`}>Indonesian, English</span>
                </div>
              </div>

              {/* Interests */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: IoCodeSlashOutline, label: 'Web Dev' },
                  { icon: IoCafeOutline, label: 'Coffee' },
                  { icon: IoGameControllerOutline, label: 'Gaming' },
                  { icon: IoBookOutline, label: 'Learning' }
                ].map((interest, i) => (
                  <div
                    key={i}
                    className={`${cardBg} ${neumorph} rounded-xl p-4 flex items-center gap-3 hover:scale-105 transition-all duration-300`}
                  >
                    <interest.icon className={`w-7 h-7 ${textColor}`} />
                    <span className={`text-sm font-semibold ${textColor}`}>{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
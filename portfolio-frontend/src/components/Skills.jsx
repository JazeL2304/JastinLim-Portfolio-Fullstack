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
  const skills = [
    { name: 'React', icon: reactIcon },
    { name: 'Laravel', icon: laravelIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'Unity', icon: unityIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'Android Studio', icon: androidStudioIcon },
    { name: 'Kotlin', icon: kotlinIcon },
    { name: 'PHP', icon: phpIcon }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center bg-gradient-to-br from-[#EEEEEE] to-white py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <h2 className="font-sans text-5xl font-bold text-center mb-16 text-gray-900">Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center transform transition duration-300 hover:scale-110 hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-[#CF0A0A] group-hover:to-[#DC5F00] p-5">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-sans mt-4 text-sm font-semibold text-gray-800 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

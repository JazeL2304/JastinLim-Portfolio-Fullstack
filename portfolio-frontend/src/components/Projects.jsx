import { useState, useEffect } from 'react';
import { getProjects } from '../services/projectService';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-[#000000]">My Projects</h2>
        
        {loading ? (
          <div className="text-center text-2xl text-gray-600">Loading projects...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#CF0A0A]">
                <div className="h-56 bg-gradient-to-br from-[#DC5F00] to-[#CF0A0A]"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-[#000000]">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech_stack.map(tech => (
                      <span key={tech} className="bg-[#EEEEEE] text-[#000000] px-4 py-2 rounded-full text-sm font-medium border border-[#DC5F00]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-[#CF0A0A] hover:text-[#DC5F00] font-semibold text-lg">
                      GitHub →
                    </a>
                    <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="text-[#DC5F00] hover:text-[#CF0A0A] font-semibold text-lg">
                      Live Demo →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;

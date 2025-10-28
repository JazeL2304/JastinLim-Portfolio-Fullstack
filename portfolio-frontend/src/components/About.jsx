function About() {
  return (
    <section id="about" className="py-24 bg-[#EEEEEE]">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="font-sans text-5xl font-bold text-center mb-16 text-[#000000]">About Me</h2>
        <div className="bg-white rounded-2xl shadow-xl p-12 border-l-8 border-[#CF0A0A]">
          <p className="font-sans text-xl text-gray-700 mb-6 leading-relaxed">
            Hello! I'm a passionate full-stack developer with expertise in building modern web applications.
          </p>
          <p className="font-sans text-xl text-gray-700 mb-6 leading-relaxed">
            I specialize in React, Laravel, and creating seamless user experiences with Tailwind CSS.
          </p>
          <p className="font-sans text-xl text-gray-700 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies and contributing to open-source projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

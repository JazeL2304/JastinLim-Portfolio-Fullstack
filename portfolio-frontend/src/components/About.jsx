import { useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import myPhoto from '../assets/photo/FOTO_JASTIN_1.jpg';

function AboutContact() {
  // Gunakan Context untuk Dark Mode (HAPUS state lokal)
  const { isDark, bgClass, cardBg, textColor, textMuted, neumorph, neumorphInset } = useDarkMode();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen ${bgClass} py-20 transition-all duration-500 relative overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      {/* DARK MODE TOGGLE DIHAPUS DARI SINI */}

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-32">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 ${cardBg} ${neumorph} rounded-full px-5 py-2.5 mb-6`}>
              <span className="text-xl">👋</span>
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
                  Hi! I'm <span className={`${textColor} font-semibold`}>Jastin Lim</span>, a Computer Science student based in Jakarta, Indonesia. 
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
                  <span className={`${textMuted} text-sm`}>🎓 Education</span>
                  <span className={`${textColor} text-sm font-semibold`}>Computer Science Student</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${textMuted} text-sm`}>📍 Location</span>
                  <span className={`${textColor} text-sm font-semibold`}>Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${textMuted} text-sm`}>💼 Status</span>
                  <span className={`${textColor} text-sm font-semibold`}>Open to Internship</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${textMuted} text-sm`}>🌐 Languages</span>
                  <span className={`${textColor} text-sm font-semibold`}>Indonesian, English</span>
                </div>
              </div>

              {/* Interests */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji: '💻', label: 'Web Dev' },
                  { emoji: '☕', label: 'Coffee' },
                  { emoji: '🎮', label: 'Gaming' },
                  { emoji: '📚', label: 'Learning' }
                ].map((interest, i) => (
                  <div
                    key={i}
                    className={`${cardBg} ${neumorph} rounded-xl p-4 flex items-center gap-3 hover:scale-105 transition-all duration-300`}
                  >
                    <span className="text-3xl">{interest.emoji}</span>
                    <span className={`text-sm font-semibold ${textColor}`}>{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 ${cardBg} ${neumorph} rounded-full px-5 py-2.5 mb-6`}>
              <span className="text-xl">✉️</span>
              <span className={`text-sm font-medium ${textColor}`}>Let's Connect</span>
            </div>
            
            <h2 className={`text-5xl md:text-6xl font-extrabold ${textColor} mb-6`}>
              Get In{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className={`text-lg ${textMuted} max-w-2xl mx-auto`}>
              Feel free to reach out for collaborations, internship opportunities, or just to say hi!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
                {
                  emoji: '📧',
                  title: 'Email',
                  value: 'jastin.lim@example.com',
                  link: 'mailto:jastin.lim@example.com'
                },
                {
                  emoji: '📱',
                  title: 'Phone',
                  value: '+62 812-3456-7890',
                  link: 'tel:+6281234567890'
                },
                {
                  emoji: '📍',
                  title: 'Location',
                  value: 'Jakarta, Indonesia',
                  link: null
                }
              ].map((contact, i) => (
                <div
                  key={i}
                  className={`${cardBg} ${neumorph} rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${
                    contact.link ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => contact.link && window.open(contact.link, '_blank')}
                >
                  <div className="text-4xl mb-3">{contact.emoji}</div>
                  <h4 className={`text-lg font-bold ${textColor} mb-2`}>{contact.title}</h4>
                  <p className={`${textMuted} text-sm`}>{contact.value}</p>
                </div>
              ))}

              {/* Social Links */}
              <div className={`${cardBg} ${neumorph} rounded-2xl p-6`}>
                <h4 className={`text-lg font-bold ${textColor} mb-4`}>Connect With Me</h4>
                <div className="flex gap-3">
                  {[
                    { emoji: '🐙', link: '#', label: 'GitHub' },
                    { emoji: '💼', link: '#', label: 'LinkedIn' },
                    { emoji: '✉️', link: '#', label: 'Email' }
                  ].map((social, i) => (
                    <button
                      key={i}
                      onClick={() => window.open(social.link, '_blank')}
                      className={`flex-1 ${cardBg} ${neumorph} rounded-xl h-14 flex items-center justify-center hover:scale-110 transition-all duration-300 text-2xl`}
                      title={social.label}
                    >
                      {social.emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-2 ${cardBg} ${neumorph} rounded-3xl p-8`}>
              <div className="space-y-6">
                <div>
                  <label className={`block ${textColor} font-semibold mb-3 text-sm`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full ${cardBg} ${neumorphInset} rounded-xl px-6 py-4 ${textColor} focus:outline-none transition-all duration-300`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className={`block ${textColor} font-semibold mb-3 text-sm`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full ${cardBg} ${neumorphInset} rounded-xl px-6 py-4 ${textColor} focus:outline-none transition-all duration-300`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className={`block ${textColor} font-semibold mb-3 text-sm`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full ${cardBg} ${neumorphInset} rounded-xl px-6 py-4 ${textColor} focus:outline-none resize-none transition-all duration-300`}
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className={`w-full ${cardBg} ${neumorph} rounded-xl py-5 ${textColor} font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3`}
                >
                  <span>📨</span>
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutContact;
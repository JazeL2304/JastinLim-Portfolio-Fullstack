import { useState } from 'react';
import { Heart, Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

function Footer() {
  const [isDark, setIsDark] = useState(true);
  const [email, setEmail] = useState('');

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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className={`${bgClass} py-16 relative overflow-hidden transition-all duration-500`}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Newsletter Section */}
        <div className={`${cardBg} ${neumorph} rounded-3xl p-8 md:p-12 mb-12`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className={`text-3xl font-bold ${textColor} mb-3`}>
                Stay Updated 📬
              </h3>
              <p className={`${textMuted}`}>
                Subscribe to get notified about new projects and tech insights!
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className={`flex-1 ${cardBg} ${neumorphInset} rounded-xl px-6 py-4 ${textColor} focus:outline-none`}
              />
              <button
                type="submit"
                className={`${cardBg} ${neumorph} px-8 py-4 rounded-xl ${textColor} font-bold hover:scale-105 transition-all duration-300`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                JL
              </div>
              <h3 className={`text-xl font-bold ${textColor}`}>
                Jastin Lim
              </h3>
            </div>
            <p className={`${textMuted} mb-6 text-sm leading-relaxed`}>
              Full-Stack Developer passionate about creating beautiful and functional digital experiences.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Github className="w-5 h-5" />, link: '#', color: 'from-gray-600 to-gray-800' },
                { icon: <Linkedin className="w-5 h-5" />, link: '#', color: 'from-blue-600 to-blue-800' },
                { icon: <Twitter className="w-5 h-5" />, link: '#', color: 'from-sky-500 to-blue-600' },
                { icon: <Instagram className="w-5 h-5" />, link: '#', color: 'from-pink-500 to-purple-600' }
              ].map((social, i) => (
                <button
                  key={i}
                  onClick={() => window.open(social.link, '_blank')}
                  className={`w-12 h-12 ${cardBg} ${neumorph} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group relative overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />
                  <div className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-bold ${textColor} mb-6`}>Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`${textMuted} hover:text-orange-500 transition-colors duration-300 text-sm font-medium`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-lg font-bold ${textColor} mb-6`}>Services</h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Mobile Apps',
                'UI/UX Design',
                'Game Development',
                'Consulting'
              ].map((service, i) => (
                <li key={i}>
                  <span className={`${textMuted} text-sm block`}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-bold ${textColor} mb-6`}>Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className={`w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <Mail className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className={`text-xs ${textMuted} mb-1`}>Email</p>
                  <a href="mailto:jastin.lim@example.com" className={`text-sm ${textColor} hover:text-orange-500 transition-colors duration-300`}>
                    jastin.lim@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className={`w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <Phone className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className={`text-xs ${textMuted} mb-1`}>Phone</p>
                  <a href="tel:+6281234567890" className={`text-sm ${textColor} hover:text-orange-500 transition-colors duration-300`}>
                    +62 812-3456-7890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className={`w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <MapPin className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className={`text-xs ${textMuted} mb-1`}>Location</p>
                  <span className={`text-sm ${textColor}`}>
                    Jakarta, Indonesia
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`${cardBg} ${neumorphInset} h-px mb-8`} />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className={`${textMuted} text-sm text-center md:text-left`}>
            <p className="flex items-center justify-center md:justify-start gap-2">
              © 2025 Jastin Lim. Made with 
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> 
              and lots of ☕
            </p>
          </div>

          {/* Tech Stack Badge */}
          <div className={`${cardBg} ${neumorph} rounded-full px-6 py-3 flex items-center gap-2`}>
            <span className={`text-xs ${textMuted}`}>Built with:</span>
            <div className="flex items-center gap-2">
              {['⚛️', '🔥', '🎨'].map((emoji, i) => (
                <span key={i} className="text-lg">{emoji}</span>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`${cardBg} ${neumorph} w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group`}
          >
            <ArrowUp className="w-5 h-5 text-orange-500 group-hover:animate-bounce" />
          </button>
        </div>

        {/* Fun Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { emoji: '☕', value: '1000+', label: 'Cups of Coffee' },
            { emoji: '💻', value: '50K+', label: 'Lines of Code' },
            { emoji: '🐛', value: '500+', label: 'Bugs Fixed' },
            { emoji: '😊', value: '10+', label: 'Happy Clients' }
          ].map((stat, i) => (
            <div
              key={i}
              className={`${cardBg} ${neumorph} rounded-xl p-4 text-center hover:scale-105 transition-all duration-300`}
            >
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className={`text-xl font-bold ${textColor} mb-1`}>{stat.value}</div>
              <div className={`text-xs ${textMuted}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Easter Egg */}
        <div className="mt-8 text-center">
          <button
            onClick={() => alert('🎉 You found the easter egg! Thanks for exploring!')}
            className={`text-xs ${textMuted} hover:text-orange-500 transition-colors duration-300`}
          >
            Click here for a surprise 🥚
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
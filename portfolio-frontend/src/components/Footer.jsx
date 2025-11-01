import { useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { 
  IoHeartOutline,
  IoMailOutline,
  IoLocationOutline,
  IoCallOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoInstagram,
  IoArrowUpOutline,
  IoSendOutline,
  IoCafeOutline,
  IoCodeSlashOutline,
  IoBugOutline,
  IoHappyOutline
} from 'react-icons/io5';
import { BiCodeAlt } from "react-icons/bi";

function Footer() {
  const { isDark, cardBg, textColor, textMuted, neumorph, neumorphInset } = useDarkMode();
  
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="py-16 relative overflow-hidden transition-all duration-500">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Newsletter Section */}
        <div className={`${cardBg} ${neumorph} rounded-3xl p-8 md:p-12 mb-16`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className={`text-3xl font-bold ${textColor} mb-3 flex items-center gap-3`}>
                <IoMailOutline className="w-8 h-8 text-orange-500" />
                Stay Updated
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
                className={`${cardBg} ${neumorph} px-8 py-4 rounded-xl ${textColor} font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2`}
              >
                <IoSendOutline className="w-5 h-5" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content - NO CARDS, just text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                <BiCodeAlt size={28} />
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
                { icon: IoLogoGithub, link: '#', color: 'from-gray-600 to-gray-800' },
                { icon: IoLogoLinkedin, link: '#', color: 'from-blue-600 to-blue-800' },
                { icon: IoLogoTwitter, link: '#', color: 'from-sky-500 to-blue-600' },
                { icon: IoLogoInstagram, link: '#', color: 'from-pink-500 to-purple-600' }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <button
                    key={i}
                    onClick={() => window.open(social.link, '_blank')}
                    className={`w-12 h-12 ${cardBg} ${neumorph} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group relative overflow-hidden`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />
                    <div className={`relative z-10 ${textMuted} group-hover:text-white transition-colors duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </button>
                );
              })}
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
                'Game Development'
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
                  <IoMailOutline className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className={`text-xs ${textMuted} mb-1`}>Email</p>
                  <a href="mailto:jastinlim2304@gmail.com" className={`text-sm ${textColor} hover:text-orange-500 transition-colors duration-300 break-all`}>
                    jastinlim2304@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className={`w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <IoCallOutline className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className={`text-xs ${textMuted} mb-1`}>Phone</p>
                  <a href="tel:+6281234567890" className={`text-sm ${textColor} hover:text-orange-500 transition-colors duration-300`}>
                    +62 812-3913-3300
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className={`w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <IoLocationOutline className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className={`text-xs ${textMuted} mb-1`}>Location</p>
                  <span className={`text-sm ${textColor}`}>
                    Tangerang, Indonesia
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider - Very subtle */}
        <div className={`h-px mb-12 ${isDark ? 'bg-gray-700/20' : 'bg-gray-300/20'}`} />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Copyright */}
          <div className={`${textMuted} text-sm text-center md:text-left`}>
            <p className="flex items-center justify-center md:justify-start gap-2">
              © 2025 Jastin Lim. Made with 
              <IoHeartOutline className="w-4 h-4 text-red-500 animate-pulse" /> 
              and lots of 
              <IoCafeOutline className="w-4 h-4" />
            </p>
          </div>

          {/* Tech Stack Badge */}
          <div className={`${cardBg} ${neumorph} rounded-full px-6 py-3 flex items-center gap-2`}>
            <span className={`text-xs ${textMuted}`}>Built with:</span>
            <div className="flex items-center gap-2">
              <IoCodeSlashOutline className="w-5 h-5 text-cyan-500" />
              <span className="text-lg">🔥</span>
              <span className="text-lg">🎨</span>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`${cardBg} ${neumorph} w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group`}
          >
            <IoArrowUpOutline className="w-5 h-5 text-orange-500 group-hover:animate-bounce" />
          </button>
        </div>

        {/* Fun Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: IoCafeOutline, value: '1000+', label: 'Cups of Coffee' },
            { icon: IoCodeSlashOutline, value: '50K+', label: 'Lines of Code' },
            { icon: IoBugOutline, value: '500+', label: 'Bugs Fixed' },
            { icon: IoHappyOutline, value: '10+', label: 'Happy Clients' }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`${cardBg} ${neumorph} rounded-xl p-4 text-center hover:scale-105 transition-all duration-300`}
              >
                <Icon className={`w-8 h-8 ${textColor} mx-auto mb-2`} />
                <div className={`text-xl font-bold ${textColor} mb-1`}>{stat.value}</div>
                <div className={`text-xs ${textMuted}`}>{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Easter Egg */}
        <div className="text-center">
          <button
            onClick={() => alert('🎉 You found the easter egg! Thanks for exploring!')}
            className={`text-xs ${textMuted} hover:text-orange-500 transition-colors duration-300`}>
            Click here for a surprise 🥚
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
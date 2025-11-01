import { useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { 
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoSendOutline
} from 'react-icons/io5';

function Contact() {
  const { cardBg, textColor, textMuted, neumorph, neumorphInset } = useDarkMode();
  
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
    <div className="py-32 transition-all duration-500 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* CONTACT SECTION */}
        <section>
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 ${cardBg} ${neumorph} rounded-full px-5 py-2.5 mb-6`}>
              <IoMailOutline className="w-5 h-5 text-orange-500" />
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
                  icon: IoMailOutline,
                  title: 'Email',
                  value: 'jastinlim2304@gmail.com',
                  link: 'mailto:jastinlim2304@gmail.com'
                },
                {
                  icon: IoCallOutline,
                  title: 'Phone',
                  value: '+62 812-3913-3300',
                  link: 'tel:+6281234567890'
                },
                {
                  icon: IoLocationOutline,
                  title: 'Location',
                  value: 'Tangerang, Indonesia',
                  link: null
                }
              ].map((contact, i) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={i}
                    className={`${cardBg} ${neumorph} rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${
                      contact.link ? 'cursor-pointer' : ''
                    }`}
                    onClick={() => contact.link && window.open(contact.link, '_blank')}
                  >
                    <div className="mb-3">
                      <Icon className={`w-10 h-10 ${textColor}`} />
                    </div>
                    <h4 className={`text-lg font-bold ${textColor} mb-2`}>{contact.title}</h4>
                    <p className={`${textMuted} text-sm`}>{contact.value}</p>
                  </div>
                );
              })}

              {/* Social Links */}
              <div className={`${cardBg} ${neumorph} rounded-2xl p-6`}>
                <h4 className={`text-lg font-bold ${textColor} mb-4`}>Connect With Me</h4>
                <div className="flex gap-3">
                  {[
                    { icon: IoLogoGithub, link: '#', label: 'GitHub' },
                    { icon: IoLogoLinkedin, link: '#', label: 'LinkedIn' },
                    { icon: IoMailOutline, link: '#', label: 'Email' }
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <button
                        key={i}
                        onClick={() => window.open(social.link, '_blank')}
                        className={`flex-1 ${cardBg} ${neumorph} rounded-xl h-14 flex items-center justify-center hover:scale-110 transition-all duration-300`}
                        title={social.label}
                      >
                        <Icon className={`w-6 h-6 ${textColor}`} />
                      </button>
                    );
                  })}
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
                  <IoSendOutline className="w-6 h-6" />
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

export default Contact;
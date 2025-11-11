import { useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoSendOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoCloseOutline
} from 'react-icons/io5';

function Contact() {
  const { isDark, cardBg, textColor, textMuted, neumorph, neumorphInset } = useDarkMode();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [modalMessage, setModalMessage] = useState('');

  // Animation hooks
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);
  const [formRef, formVisible] = useScrollAnimation(0.1);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e5e8d917-86ed-4390-98ce-15d309750dec',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: 'jastinlim2304@gmail.com',
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setModalType('success');
        setModalMessage('Thank you! Your message has been sent successfully. I will get back to you soon! 🎉');
        setShowModal(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setModalType('error');
      setModalMessage('Oops! Something went wrong. Please try again or contact me directly via email at jastinlim2304@gmail.com');
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: IoMailOutline,
      title: 'Email',
      value: 'jastinlim2304@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=jastinlim2304@gmail.com'
    },
    {
      icon: IoCallOutline,
      title: 'Phone',
      value: '+62 812-3913-3300',
      link: 'https://wa.me/6281239133300'
    },
    {
      icon: IoLocationOutline,
      title: 'Location',
      value: 'Tangerang, Indonesia',
      link: 'https://www.google.com/maps/place/Tangerang,+Banten,+Indonesia'
    }
  ];

  const socialLinks = [
    { 
      icon: IoLogoGithub, 
      link: 'https://github.com/JazeL2304', 
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    { 
      icon: IoLogoLinkedin, 
      link: 'https://www.linkedin.com/in/jastin-lim-30a20228a/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    { 
      icon: IoLogoInstagram, 
      link: 'https://www.instagram.com/jast.lim/', 
      label: 'Instagram',
      color: 'hover:text-pink-600'
    }
  ];

  const Modal = () => {
    if (!showModal) return null;

    const isSuccess = modalType === 'success';

    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        />
        
        <div className={`relative ${cardBg} ${neumorph} rounded-3xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 animate-bounce-in`}>
          <button
            onClick={() => setShowModal(false)}
            className={`absolute top-4 right-4 w-10 h-10 ${cardBg} ${neumorph} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}
          >
            <IoCloseOutline className={`w-6 h-6 ${textColor}`} />
          </button>

          <div className="flex justify-center mb-6">
            <div className={`w-20 h-20 ${cardBg} ${neumorphInset} rounded-full flex items-center justify-center`}>
              {isSuccess ? (
                <IoCheckmarkCircleOutline className="w-12 h-12 text-green-500 animate-scale-in" />
              ) : (
                <IoCloseCircleOutline className="w-12 h-12 text-red-500 animate-shake" />
              )}
            </div>
          </div>

          <h3 className={`text-2xl font-bold ${textColor} text-center mb-4`}>
            {isSuccess ? 'Message Sent! ✨' : 'Oops! 😞'}
          </h3>
          <p className={`${textMuted} text-center mb-6 leading-relaxed`}>
            {modalMessage}
          </p>

          <button
            onClick={() => setShowModal(false)}
            className={`w-full ${cardBg} ${neumorph} rounded-xl py-4 ${textColor} font-bold text-lg hover:scale-105 transition-all duration-300`}
          >
            Got it!
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="py-32 transition-all duration-500 relative overflow-hidden">
      <Modal />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <section>
          {/* Header - Slide Down */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 scroll-hidden ${headerVisible ? 'animate-slide-down' : ''}`}
          >
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
            {/* Contact Info Cards - Slide Left */}
            <div 
              ref={cardsRef}
              className={`space-y-6 scroll-hidden ${cardsVisible ? 'animate-slide-left' : ''}`}
            >
              {contactInfo.map((contact, i) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={i}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${cardBg} ${neumorph} rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="mb-3">
                      <Icon className={`w-10 h-10 ${textColor}`} />
                    </div>
                    <h4 className={`text-lg font-bold ${textColor} mb-2`}>{contact.title}</h4>
                    <p className={`${textMuted} text-sm break-words`}>{contact.value}</p>
                  </a>
                );
              })}

              {/* Social Links */}
              <div className={`${cardBg} ${neumorph} rounded-2xl p-6`}>
                <h4 className={`text-lg font-bold ${textColor} mb-4`}>Connect With Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 ${cardBg} ${neumorph} rounded-xl h-14 flex items-center justify-center hover:scale-110 transition-all duration-300 group`}
                        title={social.label}
                      >
                        <Icon className={`w-6 h-6 ${textColor} transition-colors ${social.color}`} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form - Slide Right */}
            <div 
              ref={formRef}
              className={`lg:col-span-2 ${cardBg} ${neumorph} rounded-3xl p-8 scroll-hidden ${formVisible ? 'animate-slide-right' : ''}`}
            >
              <form onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className={`block ${textColor} font-semibold mb-3 text-sm`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    autoComplete="off"
                    className={`w-full ${cardBg} ${neumorphInset} rounded-xl px-6 py-4 ${textColor} focus:outline-none transition-all duration-300 contact-input ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className={`block ${textColor} font-semibold mb-3 text-sm`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    autoComplete="off"
                    className={`w-full ${cardBg} ${neumorphInset} rounded-xl px-6 py-4 ${textColor} focus:outline-none transition-all duration-300 contact-input ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className={`block ${textColor} font-semibold mb-3 text-sm`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    rows={6}
                    autoComplete="off"
                    className={`w-full ${cardBg} ${neumorphInset} rounded-xl px-6 py-4 ${textColor} focus:outline-none resize-none transition-all duration-300 contact-input ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${cardBg} ${neumorph} rounded-xl py-5 ${textColor} font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-6 h-6 border-3 border-t-orange-500 border-r-transparent border-b-orange-500 border-l-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <IoSendOutline className="w-6 h-6" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% { transform: scale(0.9); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes scale-in {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.4s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
        .animate-shake {
          animation: shake 0.5s ease-out;
        }

        /* FIX AUTOCOMPLETE STYLING - Prevent style changes */
        .contact-input:-webkit-autofill,
        .contact-input:-webkit-autofill:hover,
        .contact-input:-webkit-autofill:focus,
        .contact-input:-webkit-autofill:active {
          -webkit-background-clip: text;
          -webkit-text-fill-color: ${isDark ? '#ffffff' : '#111827'} !important;
          transition: background-color 5000s ease-in-out 0s !important;
          box-shadow: inset 8px 8px 16px ${isDark ? '#0a0a0a' : '#bebebe'}, inset -8px -8px 16px ${isDark ? '#2a2a2a' : '#ffffff'} !important;
          background-color: ${isDark ? '#1f2937' : '#e5e7eb'} !important;
          caret-color: ${isDark ? '#ffffff' : '#111827'} !important;
          color: ${isDark ? '#ffffff' : '#111827'} !important;
        }
        
        .contact-input::placeholder {
          color: ${isDark ? '#9ca3af' : '#6b7280'} !important;
          opacity: 1 !important;
        }
        
        /* Force background color consistency */
        .contact-input {
          background-color: ${isDark ? '#1f2937' : '#e5e7eb'} !important;
        }
      `}</style>
    </div>
  );
}

export default Contact;
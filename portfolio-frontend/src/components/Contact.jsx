import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="font-sans text-5xl font-bold text-center mb-16 text-[#000000]">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-sans block text-[#000000] font-semibold mb-2 text-lg">Name</label>
            <input 
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="font-sans w-full px-6 py-4 border-2 border-[#EEEEEE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC5F00] focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="font-sans block text-[#000000] font-semibold mb-2 text-lg">Email</label>
            <input 
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="font-sans w-full px-6 py-4 border-2 border-[#EEEEEE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC5F00] focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="font-sans block text-[#000000] font-semibold mb-2 text-lg">Message</label>
            <textarea 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="6"
              className="font-sans w-full px-6 py-4 border-2 border-[#EEEEEE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC5F00] focus:border-transparent"
              required
            ></textarea>
          </div>
          <button 
            type="submit"
            className="font-sans w-full bg-gradient-to-r from-[#CF0A0A] to-[#DC5F00] text-white py-4 rounded-lg text-lg font-semibold hover:from-[#DC5F00] hover:to-[#CF0A0A] transition shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

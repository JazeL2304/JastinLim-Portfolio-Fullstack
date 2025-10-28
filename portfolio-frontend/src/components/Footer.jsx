function Footer() {
  return (
    <footer className="bg-[#000000] text-[#EEEEEE] py-12">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <div className="flex justify-center gap-8 mb-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#EEEEEE] hover:text-[#DC5F00] transition text-lg font-medium">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#EEEEEE] hover:text-[#DC5F00] transition text-lg font-medium">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="text-[#EEEEEE] hover:text-[#DC5F00] transition text-lg font-medium">
            Email
          </a>
        </div>
        <p className="text-gray-400">© 2025 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

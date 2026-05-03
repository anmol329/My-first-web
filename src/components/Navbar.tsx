import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Services', 'Facilities', 'Results', 'Pricing', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0B0B]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-3xl font-heading text-white cursor-pointer tracking-wider">
          IRON<span className="text-accent-green">FORGE</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-accent-green transition-colors">
              {link}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2.5 bg-accent-green text-primary-black font-semibold uppercase tracking-wider text-sm hover:bg-[#00d672] transition-colors rounded">
            Join Now
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0B0B0B] border-b border-white/10 flex flex-col px-4 py-4 md:hidden"
          >
            {links.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="py-3 text-lg font-medium text-gray-300 hover:text-accent-green border-b border-white/5"
              >
                {link}
              </a>
            ))}
            <a href="#contact" className="mt-6 px-4 py-3 bg-accent-green text-primary-black font-semibold text-center uppercase tracking-wider text-sm rounded">
              Join Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

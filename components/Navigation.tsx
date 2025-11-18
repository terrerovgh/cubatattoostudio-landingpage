import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(".mobile-menu", { x: 0, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(".mobile-menu", { x: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [isOpen]);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Artists", href: "#artists" },
    { name: "Gallery", href: "#gallery" },
    { name: "Booking", href: "#booking" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 mix-blend-difference text-white ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-widest font-serif">CUBA</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm uppercase tracking-[0.2em] hover:text-gray-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className="mobile-menu fixed inset-0 bg-black z-40 transform translate-x-full md:hidden flex flex-col justify-center items-center space-y-8">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="text-3xl font-serif uppercase tracking-widest text-white hover:text-gray-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navigation;
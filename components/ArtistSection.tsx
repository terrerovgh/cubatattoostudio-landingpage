import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';
import { Artist } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface ArtistSectionProps {
  artist: Artist;
  index: number;
}

const ArtistSection: React.FC<ArtistSectionProps> = ({ artist, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const parallaxImageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isEven = index % 2 === 0;
      
      // Reveal animation for the container
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom top",
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      // Parallax animation for the image inside
      gsap.fromTo(parallaxImageRef.current, 
        { 
          scale: 1.2,
          yPercent: -15 
        }, 
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // Text reveal animation
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
        x: isEven ? -50 : 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out"
      });

    }, containerRef);

    return () => ctx.revert();
  }, [index]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  const isEven = index % 2 === 0;

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col md:flex-row items-center py-20 md:py-0 overflow-hidden border-t border-neutral-900 bg-black">
      <div className={`w-full md:w-1/2 p-6 md:p-20 flex flex-col justify-center h-full order-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <div ref={textRef}>
          <span className="block text-neutral-500 tracking-[0.3em] mb-2 uppercase text-sm">{artist.role}</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-8 uppercase">{artist.name}</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light text-justify">
            {artist.bio}
          </p>
          
          {/* Mini Portfolio Grid */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            {artist.portfolio.map((img, i) => (
              <div 
                key={i} 
                className="aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`${artist.name} work ${i}`} 
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-700" 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`w-full md:w-1/2 h-[50vh] md:h-screen relative order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <div ref={imageRef} className="w-full h-full grayscale brightness-75 contrast-125 overflow-hidden">
          <img 
            ref={parallaxImageRef}
            src={artist.profileImage} 
            alt={artist.name} 
            className="object-cover w-full h-full" 
            loading="lazy" 
          />
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-50"
            onClick={() => setSelectedImage(null)}
            aria-label="Close modal"
          >
            <X size={40} />
          </button>
          
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Enlarged portfolio piece" 
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ArtistSection;
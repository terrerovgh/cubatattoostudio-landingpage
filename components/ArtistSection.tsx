import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Artist } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface ArtistSectionProps {
  artist: Artist;
  index: number;
}

const ArtistSection: React.FC<ArtistSectionProps> = ({ artist, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isEven = index % 2 === 0;
      
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
              <div key={i} className="aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                <img src={img} alt={`${artist.name} work ${i}`} className="object-cover w-full h-full hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`w-full md:w-1/2 h-[50vh] md:h-screen relative order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <div ref={imageRef} className="w-full h-full grayscale brightness-75 contrast-125">
          <img src={artist.profileImage} alt={artist.name} className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
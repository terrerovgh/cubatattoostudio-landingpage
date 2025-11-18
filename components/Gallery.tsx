import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CONTENT } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gallery-item').forEach((item: any, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1 % 0.3, // Stagger effect based on index
          ease: "power2.out"
        });
      });
    }, galleryRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={galleryRef} className="py-32 px-6 bg-black">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">{CONTENT.gallery.title}</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {CONTENT.gallery.images.map((src, idx) => (
            <div key={idx} className="gallery-item break-inside-avoid group relative overflow-hidden">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 duration-300"></div>
              <img 
                src={src} 
                alt="Studio work" 
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
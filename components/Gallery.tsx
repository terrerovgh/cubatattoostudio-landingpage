import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { CONTENT } from '../constants';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [returnPos, setReturnPos] = useState<number>(0);

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
          delay: (i * 0.1) % 0.3,
          ease: "power2.out"
        });
      });
    }, galleryRef);
    return () => ctx.revert();
  }, []);

  const handleImageClick = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;

    if (focusedIndex === index) {
      // Return to original position
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: returnPos },
        ease: "power4.inOut"
      });
      setFocusedIndex(null);
    } else {
      // Save position if starting new focus interaction
      if (focusedIndex === null) {
        setReturnPos(window.scrollY);
      }
      setFocusedIndex(index);

      // Center the clicked image in viewport
      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const centerY = rect.top + scrollTop - (window.innerHeight / 2) + (rect.height / 2);

      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: centerY },
        ease: "power4.inOut"
      });
    }
  };

  return (
    <section id="gallery" ref={galleryRef} className="py-32 px-6 bg-black">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">{CONTENT.gallery.title}</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {CONTENT.gallery.images.map((src, idx) => (
            <div 
              key={idx} 
              className={`gallery-item break-inside-avoid group relative overflow-hidden cursor-pointer transition-all duration-700 ${focusedIndex !== null && focusedIndex !== idx ? 'opacity-30 blur-[2px]' : 'opacity-100'}`}
              onClick={(e) => handleImageClick(idx, e)}
            >
              <div className={`absolute inset-0 bg-black/0 transition-colors z-10 duration-300 pointer-events-none ${focusedIndex === idx ? 'bg-transparent' : 'group-hover:bg-black/20'}`}></div>
              <img 
                src={src} 
                alt="Studio work" 
                className={`w-full transition-all duration-700 ease-in-out transform ${focusedIndex === idx ? 'grayscale-0 scale-105' : 'grayscale group-hover:grayscale-0 group-hover:scale-105'}`}
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
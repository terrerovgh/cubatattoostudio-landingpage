import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CONTENT } from '../constants';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=1")
      .from(".hero-location", {
        opacity: 0,
        duration: 1
      }, "-=0.5");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Texture (Noise) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] filter contrast-150 brightness-100"></div>
      
      <div className="z-10 text-center px-4">
        <div className="hero-location text-xs md:text-sm tracking-[0.5em] uppercase text-gray-400 mb-6">
          {CONTENT.hero.location}
        </div>
        <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 mix-blend-overlay leading-none">
          {CONTENT.hero.title.split(' ').map((word, i) => (
            <span key={i} className="block md:inline mr-4">{word}</span>
          ))}
        </h1>
        <p ref={subtitleRef} className="text-md md:text-xl font-light tracking-widest text-gray-300 max-w-md mx-auto border-t border-gray-800 pt-6 mt-6">
          {CONTENT.hero.subtitle}
        </p>
      </div>

      <div className="absolute bottom-12 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white opacity-50">
          <path d="M7 13L12 18L17 13M7 6L12 11L17 6" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
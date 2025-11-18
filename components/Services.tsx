import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CONTENT } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Desktop Horizontal Scroll
      if (window.innerWidth > 768) {
        const sections = gsap.utils.toArray('.service-panel');
        
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + triggerRef.current!.offsetWidth,
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="bg-neutral-950 relative">
      <div className="md:hidden py-20 px-6">
         <h2 className="text-4xl font-serif mb-12 text-center">{CONTENT.services.title}</h2>
         <div className="space-y-12">
            {CONTENT.services.items.map((service) => (
              <div key={service.id} className="border-b border-gray-800 pb-12">
                <div className="aspect-video w-full overflow-hidden mb-6 grayscale">
                  <img src={service.image} alt={service.title} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
         </div>
      </div>

      {/* Desktop Horizontal Container */}
      <div ref={triggerRef} className="hidden md:flex h-screen overflow-x-hidden">
        <div className="service-panel min-w-[100vw] h-full flex items-center justify-center bg-black border-r border-gray-900 relative">
           <h2 className="text-9xl font-black tracking-tighter text-neutral-900 absolute select-none">SERVICES</h2>
           <div className="z-10 text-center">
             <h2 className="text-6xl font-serif mb-4">{CONTENT.services.title}</h2>
             <p className="text-gray-500 uppercase tracking-widest">Scroll to explore</p>
           </div>
        </div>
        
        {CONTENT.services.items.map((service, index) => (
          <div key={service.id} className="service-panel min-w-[100vw] h-full flex items-center justify-between px-24 bg-black border-r border-gray-900">
             <div className="w-1/2 pr-12">
                <div className="text-6xl font-black text-neutral-800 mb-4">0{index + 1}</div>
                <h3 className="text-5xl font-serif mb-8">{service.title}</h3>
                <p className="text-xl text-gray-400 leading-loose max-w-lg">{service.description}</p>
             </div>
             <div className="w-1/2 h-[70vh] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                <img src={service.image} alt={service.title} className="object-cover w-full h-full scale-110 hover:scale-100 transition-transform duration-1000" />
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { CONTENT } from '../constants';

const Booking: React.FC = () => {
  return (
    <section id="booking" className="bg-neutral-950 text-white py-24 border-t border-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-serif mb-8">{CONTENT.booking.title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">{CONTENT.booking.description}</p>
            
            <div className="space-y-4">
              <p className="text-xl font-light tracking-wide">
                <span className="block text-xs text-gray-600 uppercase tracking-widest mb-1">Visit Us</span>
                {CONTENT.booking.address}
              </p>
              <p className="text-xl font-light tracking-wide">
                <span className="block text-xs text-gray-600 uppercase tracking-widest mb-1">Call Us</span>
                {CONTENT.booking.phone}
              </p>
              <p className="text-xl font-light tracking-wide">
                <span className="block text-xs text-gray-600 uppercase tracking-widest mb-1">Email Us</span>
                <a href={`mailto:${CONTENT.booking.email}`} className="hover:text-gray-400 transition-colors border-b border-gray-600 pb-1">
                  {CONTENT.booking.email}
                </a>
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 bg-black border border-gray-900 p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Name</label>
                  <input type="text" className="w-full bg-neutral-900 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-white transition-colors" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-gray-500">Phone</label>
                   <input type="tel" className="w-full bg-neutral-900 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-white transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                <input type="email" className="w-full bg-neutral-900 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-white transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Artist Preference</label>
                <select className="w-full bg-neutral-900 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-white transition-colors">
                  <option value="any">Any Artist</option>
                  <option value="david">David</option>
                  <option value="nina">Nina</option>
                  <option value="karli">Karli</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Project Description</label>
                <textarea rows={4} className="w-full bg-neutral-900 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-white transition-colors"></textarea>
              </div>

              <button type="submit" className="w-full bg-white text-black font-bold py-4 mt-4 hover:bg-gray-200 transition-colors uppercase tracking-widest text-sm">
                Request Consultation
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-gray-900 text-center text-gray-600 text-xs tracking-widest uppercase">
          {CONTENT.footer.copyright}
        </div>
      </div>
    </section>
  );
};

export default Booking;
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import ArtistsWrapper from './components/ArtistsWrapper';
import Gallery from './components/Gallery';
import Booking from './components/Booking';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <ArtistsWrapper />
        <Gallery />
        <Booking />
      </main>
    </div>
  );
}

export default App;
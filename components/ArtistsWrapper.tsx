import React from 'react';
import { CONTENT } from '../constants';
import ArtistSection from './ArtistSection';

const ArtistsWrapper: React.FC = () => {
  return (
    <div id="artists" className="bg-black">
      <div className="py-20 text-center">
         <h2 className="text-xl tracking-[0.5em] uppercase text-gray-500">The Hands</h2>
      </div>
      {CONTENT.artists.map((artist, index) => (
        <ArtistSection key={artist.id} artist={artist} index={index} />
      ))}
    </div>
  );
};

export default ArtistsWrapper;
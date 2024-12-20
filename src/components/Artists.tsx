import React from 'react';

const artists = [
  {
    name: 'Sarah Chen',
    specialty: 'Contemporary Paintings',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    portfolio: 'https://example.com',
    bio: 'Known for her vibrant coastal landscapes and abstract interpretations of ocean life.'
  },
  {
    name: 'Marcus Rivera',
    specialty: 'Sculpture',
    image: 'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    portfolio: 'https://example.com',
    bio: 'Creates stunning installations using recycled materials found on beaches.'
  },
  {
    name: 'Elena Popov',
    specialty: 'Mixed Media',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    portfolio: 'https://example.com',
    bio: 'Combines traditional techniques with modern technology in her artwork.'
  }
];

const Artists = () => {
  return (
    <section id="artists" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12 text-[#2E8B57]">Featured Artists</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${artist.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
                <p className="text-[#1E90FF] mb-3">{artist.specialty}</p>
                <p className="text-gray-600 mb-4">{artist.bio}</p>
                <a
                  href={artist.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FF6347] text-white px-4 py-2 rounded-full hover:bg-[#FF6347]/90 transition-colors duration-200"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
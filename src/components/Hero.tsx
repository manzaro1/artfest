import React from 'react';
import CountdownTimer from './CountdownTimer';
import { Calendar, MapPin } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589307357824-60333d3d8e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            Art at the Beach Festival
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0 mb-8 text-lg">
            <div className="flex items-center">
              <Calendar className="mr-2" />
              February 14, 2024
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" />
              Sunbird Nkopola, Lake Malawi
            </div>
          </div>

          <p className="text-xl mb-12">
            Experience the magic of visual arts on the stunning shores of Lake Malawi. Join us for a celebration of paintings, sculptures, and installations by local and international artists.
          </p>

          <div className="mb-12">
            <h2 className="text-2xl mb-6 font-semibold">Festival Begins In:</h2>
            <CountdownTimer targetDate="2024-02-14T00:00:00.000Z" />
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#tickets"
              className="bg-[#FF6347] hover:bg-[#FF6347]/90 text-white px-8 py-3 rounded-full transition-colors duration-200"
            >
              Get Tickets
            </a>
            <a
              href="#schedule"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full backdrop-blur-sm transition-colors duration-200"
            >
              View Schedule
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
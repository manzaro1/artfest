import React from 'react';
import { Film, Clock } from 'lucide-react';

const films = [
  {
    title: "Waves of Change",
    director: "Maria Santos",
    duration: "45 mins",
    time: "2:00 PM",
    description: "A documentary exploring the impact of art on coastal communities.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Last Canvas",
    director: "James Chen",
    duration: "30 mins",
    time: "3:00 PM",
    description: "A short film about an aging artist's final masterpiece.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Colors of the Shore",
    director: "Anna Miller",
    duration: "60 mins",
    time: "4:15 PM",
    description: "An experimental film merging beach photography with abstract animation.",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Films = () => {
  return (
    <section id="films" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12 text-[#2E8B57]">Film Screenings</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {films.map((film, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${film.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{film.title}</h3>
                <div className="flex items-center space-x-2 text-[#1E90FF] mb-3">
                  <Film size={16} />
                  <span>{film.director}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 mb-3">
                  <Clock size={16} />
                  <span>{film.duration}</span>
                  <span>|</span>
                  <span>{film.time}</span>
                </div>
                <p className="text-gray-600">{film.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Films;
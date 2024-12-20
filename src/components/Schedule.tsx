import React from 'react';
import { Clock } from 'lucide-react';

const Schedule = () => {
  const schedule = [
    { 
      time: '09:00 AM', 
      event: 'Registration & Welcome Coffee', 
      description: 'Check-in and collect your festival pass' 
    },
    { 
      time: '10:00 AM', 
      event: 'Opening Ceremony', 
      description: 'Official festival opening with local dignitaries' 
    },
    { 
      time: '11:00 AM', 
      event: 'Art Exhibition Opens', 
      description: 'Main gallery opens featuring local and international artists' 
    },
    { 
      time: '12:30 PM', 
      event: 'Lunch Break & Networking', 
      description: 'Catered lunch with networking opportunities' 
    },
    { 
      time: '02:00 PM', 
      event: 'Film Screenings Begin', 
      description: 'First block of short films and documentaries' 
    },
    { 
      time: '04:00 PM', 
      event: 'Artist Talks', 
      description: 'Panel discussion with featured artists' 
    },
    { 
      time: '05:30 PM', 
      event: 'Sunset Beach Art Workshop', 
      description: 'Interactive art session on the beach' 
    },
    { 
      time: '07:00 PM', 
      event: 'Evening Reception', 
      description: 'Wine and appetizers served' 
    },
    { 
      time: '08:00 PM', 
      event: 'Feature Film Premiere', 
      description: 'Screening of the festival\'s headline film' 
    },
    { 
      time: '10:00 PM', 
      event: 'Closing Ceremony', 
      description: 'Awards presentation and farewell' 
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12 text-[#2E8B57]">Festival Schedule</h2>
        
        <div className="grid gap-8 max-w-3xl mx-auto">
          {schedule.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-102"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="text-[#1E90FF]" size={24} />
                </div>
                <div>
                  <div className="flex items-baseline space-x-2">
                    <h3 className="text-lg font-semibold">{item.event}</h3>
                    <span className="text-[#FF6347] font-medium">{item.time}</span>
                  </div>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
import React from 'react';
import { Ticket } from 'lucide-react';

const tickets = [
  {
    type: "Early Bird",
    price: "$75",
    benefits: [
      "Full day access to all exhibitions",
      "Priority seating at film screenings",
      "Welcome drink and lunch included",
      "Festival tote bag"
    ],
    available: true
  },
  {
    type: "Regular",
    price: "$95",
    benefits: [
      "Full day access to all exhibitions",
      "Access to film screenings",
      "Lunch included"
    ],
    available: true
  },
  {
    type: "VIP",
    price: "$150",
    benefits: [
      "All Regular ticket benefits",
      "Private artist meet & greet",
      "Exclusive evening reception",
      "Limited edition art print"
    ],
    available: true
  }
];

const Tickets = () => {
  return (
    <section id="tickets" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12 text-[#2E8B57]">Tickets</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tickets.map((ticket, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#1E90FF]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{ticket.type}</h3>
                <Ticket className="text-[#1E90FF]" />
              </div>
              <div className="text-3xl font-bold mb-6 text-[#FF6347]">{ticket.price}</div>
              <ul className="space-y-3 mb-8">
                {ticket.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-6 w-6 text-[#2E8B57] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 rounded-full text-center transition-colors duration-200 
                  ${ticket.available 
                    ? 'bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                disabled={!ticket.available}
              >
                {ticket.available ? 'Purchase Ticket' : 'Sold Out'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tickets;
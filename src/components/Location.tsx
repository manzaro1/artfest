import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12 text-[#2E8B57]">Location & Venue</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Sunbird Nkopola</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-[#FF6347] flex-shrink-0" />
                  <p>
                    Sunbird Nkopola<br />
                    Mangochi, Malawi
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="text-[#FF6347]" />
                  <p>+265 1 580 444</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="text-[#FF6347]" />
                  <p>info@sunbirdnkopola.com</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Amenities:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Beachfront access</li>
                  <li>Multiple exhibition spaces</li>
                  <li>Indoor and outdoor screening areas</li>
                  <li>Restaurant and café</li>
                  <li>Parking available</li>
                  <li>Wheelchair accessible</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.8142768775437!2d35.1422!3d-14.2922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d9c7d6e9999999%3A0x6c6c6c6c6c6c6c6c!2sSunbird%20Nkopola!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Twitter, MapPin, Mail, Phone, Clock, Calendar, Users, Film, Palette, Ticket } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Artists from './components/Artists';
import Films from './components/Films';
import Tickets from './components/Tickets';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CountdownTimer from './components/CountdownTimer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="pt-16">
        <Hero />
        <Schedule />
        <Artists />
        <Films />
        <Tickets />
        <Location />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;